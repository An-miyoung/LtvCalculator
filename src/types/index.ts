export interface LeftSectionDisplay {
  step: string;
  title: string;
  done: boolean;
  [propsName: string]: any;
}

export type UserInputType = {
  category?: string;
  serviceName?: string;
  os?: string;
  serviceUrl?: string;
  retentionDays?: string;
  [propsName: string]: any;
};

export type DisplayDesc = {
  step: string;
  title: string;
  desc: string;
};
