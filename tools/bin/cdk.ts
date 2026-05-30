#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { config } from "../lib/config";
import { VpcStack } from "../lib/base";

const env = {
  account: config.base.account,
  region: config.base.region,
};

const app = new cdk.App();

// base stacks
export const vpcStack = new VpcStack(app, "VpcStack", {
  env,
});
