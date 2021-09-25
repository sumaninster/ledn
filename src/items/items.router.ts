/**
 * Required External Modules and Interfaces
 */

 import express, { Request, Response } from "express";
 import * as ItemService from "./items.service";
 import { BaseItem, Item } from "./item.interface";

 /**
 * Router Definition
 */

export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET api/v1/:country/:mfa/:fname/:lname/:sortcol/:page/:limit

itemsRouter.get("/:country/:mfa/:fname/:lname/:sortcol/:page/:limit", async (req: Request, res: Response) => {
  const page: number = parseInt(req.params.page, 10)  || 1;
  const limit: number = parseInt(req.params.limit, 10)  || 100;

  try {
    const items: Item[] = await ItemService.filter(req.params.country, req.params.mfa, 
      req.params.fname, req.params.lname, req.params.sortcol, page, limit);

    if (items.length > 0) {
      return res.status(200).send(items);
    }

    res.status(404).send("item not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});