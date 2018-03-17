Prerequisites for this project:
-NodeJS (at least v6 with npm 3)
-VS Code IDE

For creating VS Code project and apply configs used by me in the IDE, run install.cmd
For generating an install.cmd from your own configs, use the following command line script:
"for /F "tokens=*" %i in ('code --list-extensions') do @echo call code --install-extension %i >> install.cmd"

Make sure it is inserted as a single line (and remove erroneus lines if any, by editing the .cmd file)

ALSO you can use Settings Sync plugin for VS Code
See link for exact description:
GIST ID :  ce43645b2eea0879821a31f5bbd1487a .
Please copy and use this ID in other machines to download settings.

1. Upload Key : Shift + Alt + U
2. Download Key : Shift + Alt + D
(See more info here: https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)

Other useful links:
MochaJS documentation: https://mochajs.org/
Full Settings Sync: http://shanalikhan.github.io/2015/12/15/Visual-Studio-Code-Sync-Settings.html
