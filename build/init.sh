#!/bin/bash

if $(node -v | grep -Eq ^v4 ); then
    echo "Node installed"
else
    $(apt-get install nodejs)
fi

if $(npm -v | grep -Eq ^2); then
    echo "NPM installed...now check packages"
else
    $(apt-get install npm)
fi

PATH=$(npm bin):$PATH bnf
PATH=$(npm bin):$PATH json-duplex-stream
PATH=$(npm bin):$PATH stream-meter
PATH=$(npm bin):$PATH yargs

alias npm-exec='PATH=$(npm bin):$PATH