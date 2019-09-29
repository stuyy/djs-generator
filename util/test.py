str = '''
import json
import discord
from discord.ext import commands 
import os

CONFIG_FILE = './config/config.json'

client = commands.Bot(command_prefix='?', help_command=None)
client.database = load_db(CONFIG_FILE)
client.database.autocommit=True

with open(CONFIG_FILE) as f: # LOAD JSON FILE
    data = json.load(f) # LOAD JSON INTO data

CLIENT_TOKEN = data['token'] # STORE CLIENT TOKEN from JSON.

extensions = ['cogs.reaction', 'cogs.TextCommands', 'cogs.Events',  'cogs.AdminTextCommands', 'cogs.guild', 'cogs.SubscriptionCommands', 'cogs.HelpMessageConfigurable']

if __name__ == '__main__':
    for extension in extensions:
        client.load_extension(extension)

client.run(CLIENT_TOKEN) # Run the bot
'''
print(str)