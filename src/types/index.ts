export interface LeftSectionDisplay {
  step: string;
  title: string;
  isActive: boolean;
  done: boolean;
}

export type FormData = {
  category?: string;
};

export type UserInputType = {
  category?: string;
  serviceName?: string;
  os?: string;
  serviceUrl?: string;
  retentionDays?: string;
  validateFail?: boolean;
  [propsName: string]: any;
};
