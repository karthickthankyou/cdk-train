import { Bucket, BucketEncryption } from '@aws-cdk/aws-s3'
import * as cdk from '@aws-cdk/core'

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
    const bucket = new Bucket(this, 'MySimpleAppBucket', {
      encryption: BucketEncryption.S3_MANAGED,
    })
    new cdk.CfnOutput(this, 'MySimpleAppBucketExport', {
      value: bucket.bucketName,
      exportName: 'MySimpleAppBucketName',
    })
  }
}
