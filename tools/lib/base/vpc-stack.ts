import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import type { Construct } from "constructs";
import { config } from "../config";

export class VpcStack extends cdk.Stack {
	public readonly vpc: ec2.Vpc;

	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		// VPC
		this.vpc = new ec2.Vpc(this, "Vpc", {
			vpcName: config.base.systemName,
			maxAzs: 3,
			natGateways: 1,

			// サブネット
			subnetConfiguration: [
				{
					cidrMask: 24,
					name: "Public",
					subnetType: ec2.SubnetType.PUBLIC,
				},
				{
					cidrMask: 24,
					name: "PrivateWithNat",
					subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
				},
				{
					cidrMask: 24,
					name: "Private",
					subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
				},
			],
		});

	}
}
