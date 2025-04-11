import { client as togglClient } from "./api-toggl/client.gen.js";
import { client as redmineClient } from "./api-redmine/client.gen.js";

type RedmineAuth = {
  baseUrl: string;
  token: string;
};

type TogglAuth = {
  baseUrl: string;
  token: string;
};

type Credentials = {
  redmine: RedmineAuth;
  toggl: TogglAuth;
};

export const initConfig = ({ redmine, toggl }: Credentials) => {
  togglClient.setConfig({
    baseUrl: toggl.baseUrl,
    headers: {
      Authorization: toggl.token,
    },
  });

  redmineClient.setConfig({
    baseUrl: redmine.baseUrl,
    headers: {
      Authorization: redmine.token,
    },
  });
};
