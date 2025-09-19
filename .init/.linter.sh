#!/bin/bash
cd /home/kavia/workspace/code-generation/weatherwise-event-planner-52941-52970/main_website_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

