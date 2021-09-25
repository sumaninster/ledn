# Typescript with NodeJS REST API - Ledn

This API is built to demonstrate REST API for the provided json data (accounts_large.json)

## Project Setup

1. Navigate to the folder where you want to save the code from your terminal.
2. git clone https://github.com/sumaninster/ledn
3. npm install
4. npm run dev


## REST API: URL to test

Open following url from browser-

URL: http://localhost:7000/api/v1/:country/:mfa/:fname/:lname/:sortcol/:order/:page/:limit

1. country: provide country code [ or hyphen (-) for no country filter ]
2. mfa: provide mfa [ or hyphen (-) for no mfa filter ]
3. fname: provide first name [ or hyphen (-) for no first name filter ]
4. lname: provide last name [ or hyphen (-) for no last name filter ]
5. sortcol: provide sort column [ or hyphen (-) for no column filter ]
    sort column option: [ tokens | created ]
6. order: provide sort order [ or hyphen (-) for default order (ascending) ]
    sort order option: [ asc | desc ]
7. page: provide page numer [ or hyphen (-) for default page data (page 1) ]
8. limit: provide limit [ or hyphen (-) for default limit (default limit set to 100) ]

Examples:

1. http://localhost:7000/api/v1/PA/TOTP/Scotty/Hegmann/tokens/asc/1/10

    - country: PA
    - mfa: TOTP
    - fname: Scotty
    - lname: Hegmann
    - sortcol: tokens
    - order: asc
    - page: 1
    - limit: 10

2. http://localhost:7000/api/v1/-/-/-/-/-/-/-/-

All data, no filter, no sorting, first 100 rows

3. http://localhost:7000/api/v1/-/-/-/-/tokens/-/-/-

Sorted by number of Ledn tokens, first 100 rows

4. http://localhost:7000/api/v1/-/-/-/-/tokens/desc/-/-

Sorted by number of Ledn tokens, descending order, first 100 rows

5. http://localhost:7000/api/v1/-/-/-/-/created/-/-/-

Sorted by created date, first 100 rows

6. http://localhost:7000/api/v1/-/-/-/-/created/-/2/-

Sorted by created date, page 2, defaut limit 100 (rows: 101 - 200)

7. http://localhost:7000/api/v1/-/-/-/-/created/-/2/10

Sorted by created date, page 2, limit 10 (rows: 11 - 20)

8. http://localhost:7000/api/v1/MX/-/-/-/-/-/-/-

Filterd by country: MX, first 100 rows

9. http://localhost:7000/api/v1/-/SMS/-/-/-/-/-/-

Filterd by mfs: SMS, first 100 rows

10. http://localhost:7000/api/v1/-/-/Elwin/-/-/-/-/-

Filterd by first name: Elwin, first 100 rows

11. http://localhost:7000/api/v1/-/-/-/Smith/-/-/-/-

Filterd by last name: Smith, first 100 rows