#!/bin/bash
sed "s/tagVersion/$1/g" infrastructure/r-deployments.yaml > infrastructure/deployments.yaml