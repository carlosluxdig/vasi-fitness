#!/bin/bash
cd /Users/carlos/Desktop/Claude/Vasi/vasi-resume-site
exec npx next dev -p ${PORT:-3000}
