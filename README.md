For creating VS Code project and apply configs used by my in the IDE, run install.cmd
For generating an install.cmd from your own configs, use the following command line script:
"for /F "tokens=*" %i in ('code --list-extensions') do @echo call code --install-extension %i >> install.cmd"

Make sure it is inserted as a single line (and remove any erroneus line if any, by editing the .cmd file)

ALSO you can use Settings Sync plugin for VS Code 
(See more info here: https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)