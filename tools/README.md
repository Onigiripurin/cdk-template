# CDK

## 準備

ルートの`.env.example`をコピーして`.env`を作成してください。内容は必要に応じて書き換えてください。

## コマンド

- `bun cdk deploy <stack-name>` - スタックをデプロイします。
- `bun cdk destroy <stack-name>` - スタックを破棄します。

## Stacks　

### base（ベーススタック）
- `SecrurityGroupStack` : セキュリティグループ
- `VpcStack` : VPC

### stateful（状態を持つスタック）
- `BastionStack` : 踏み台サーバー

### stateless（状態を持たないスタック）
- `EcsStack` : ECSクラスタ
