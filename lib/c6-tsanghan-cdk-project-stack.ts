import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class C6TsanghanCdkProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    cdk.Stack
    // The code that defines your stack goes here
    // Create an S3 bucket
    new s3.Bucket(this, 'tsanghan-ce6-TypeScript-CdkBucket', {
      // Enable versioning for the bucket
      versioned: true,
      // Define the removal policy for the bucket
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      // Automatically delete objects when the bucket is deleted
      autoDeleteObjects: true,
    });
  }
}
