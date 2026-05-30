import { Config } from "../config-type";

export const config: Config = {
    base: {
        stage: "prod",
        region: process.env.CDK_DEFAULT_REGION || "",
        account: process.env.CDK_DEFAULT_ACCOUNT || "",
        systemName: "example-system",
    },
};