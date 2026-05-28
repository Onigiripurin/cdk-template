#!/bin/bash

set -e

curl -fsSL https://bun.sh/install | bash

export PATH="/home/node/.bun/bin:$PATH"

bun install -g aws-cdk