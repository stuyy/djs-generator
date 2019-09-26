#!/bin/bash
echo "
const commando = require('discord.js-commando');
module.exports = class $1Command extends commando.Command {
    constructor(client) {
        super(client, {
            name: $2,
            group: $3,
            member: $4,
            description: $5
        })
    }
    /**
    * Implementation of Abstract Method run. Your logic goes here.
    */
    async run(msg, args) {

    }
}" > "$6"; 