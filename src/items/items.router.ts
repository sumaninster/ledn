/**
 * Required External Modules and Interfaces
 */

 import express, { Request, Response } from "express";
 import * as ItemService from "./items.service";

 /**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET api/v1/:country/:mfa/:fname/:lname/:sortcol/:order/:page/:limit

itemsRouter.get("/:country/:mfa/:fname/:lname/:sortcol/:order/:page/:limit", async (req: Request, res: Response) => {
  try {
    const page: number = parseInt(req.params.page, 10)  || 1;
    const limit: number = parseInt(req.params.limit, 10)  || 100;
    const items = await ItemService.filter(req.params.country, req.params.mfa, 
      req.params.fname, req.params.lname, req.params.sortcol, req.params.order, page, limit);

    if (items.length > 0) {
      return res.status(200).send(items);
    }

    res.status(404).send("Item(s) not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST api/v1/

itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const items = await ItemService.filter(req.body.country, req.body.mfa, 
      req.body.fname, req.body.lname, req.body.sortcol, req.body.order, 
      req.body.page, req.body.limit);

    if (items.length > 0) {
      return res.status(200).send(items);
    }

    res.status(404).send("Item(s) not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});