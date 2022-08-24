import aspida from "@aspida/fetch";

import api from "apis/$api";

const SERAVICE_DOMAIN = process.env.SERAVICE_DOMAIN;
const API_KEY = process.env.API_KEY;

const fetchConfig = {
  headers: {
    "X-MICROCMS-API-KEY": API_KEY,
  },
  baseURL: `https://${SERAVICE_DOMAIN}.microcms.io/api/v1`,
};

export const client = api(aspida(fetch, fetchConfig));
