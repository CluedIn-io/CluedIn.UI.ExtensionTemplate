#!/bin/bash

/create-env-file.sh $*
nginx -g 'daemon off;'