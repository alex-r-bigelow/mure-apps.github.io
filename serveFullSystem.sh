#!/bin/bash
PATHS=(`node serveFullSystemHelper.js --extract debug_directory`)
PORTS=(`node serveFullSystemHelper.js --extract debug_port`)
JOBS=()

colorEcho(){
  echo -e "\033[1;96m${1}\033[0m"
}

onexit(){
  for JOB in $JOBS; do
    colorEcho "Killing PID ${JOB}"
    kill -9 $JOB
  done
}

trap "onexit" EXIT
trap "exit" INT TERM ERR

cd ..

for INDEX in ${!PATHS[*]}; do
  cd ${PATHS[$INDEX]}
  webpack-dev-server --progress --colors --watch --port ${PORTS[$INDEX]} &
  JOBS+=(${!})
  colorEcho "Starting webpack-dev-server for ${PATHS[$INDEX]} with PID ${!}"
  cd ..
done
wait
