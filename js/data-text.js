const texts = [
    {text:"Probing EDD (edd=off to disable)... ok", time:1500},
    {text:"<code style=\"color:gray\">Starting </code>Load Kernel Modules...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Starting </code>Remount Root and Kernel File System...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Starting </code>udev Coldplay all Devices...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Mounted </code>Huge Pages File System.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Mounted </code>POSIX Message Queue File System.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Mounted </code>Kernel Debug File System.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Mounted </code>Temporary Directory (/tmp).", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Started </code>Create List of sta nodes for the current kernel.", time:1000, hasOK:true},
    {text:"<code style=\"color:gray\">Started </code>Remount Root and Kernel File Systems.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Starting </code>Load/Save Random Seed...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Starting </code>Create System Users...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Started </code>Load Kernel Modules.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Mounting </code>Kernel Configuration File System...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Starting </code>Apply Kernel Variables...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Started </code>Create System Users.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Mounted </code>Kernel Configuration File System.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Starting </code>Create Static Device Nodes in /dev...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Started </code>Apply Kernel Variables.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Started </code>Create Static Device Nodes in /dev.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Started </code>Entropy Daemon based on the HAVEGE algorithm.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Starting </code>Journal Device...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Starting </code>udev Kernel Devise manager...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Started </code>LVM2 metadata daemon.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Started </code>udev Coldplay all Devices.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Started </code>Load/Save Random Seed.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Started </code>udev Kernel Device Manager.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Started </code>Journal Service.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Starting </code>Flush Journal to Persistent Storage...", time:100, hasOK:false},
    {text:"<code style=\"color:gray\">Started </code>Flush Journal to Persistent Storage.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Mounted </code>Temporary /etc/pacman.d/gnupg directory.", time:100, hasOK:true},
    {text:"<code style=\"color:gray\">Reached target </code>Local File System.", time:2000, hasOK:true},
];
const textsInicio = [
    {text:"<p><code>SergioRibera Linux 20.20.6-sarch1-1 (tty1)</code></p><br>"},
    {text:"<p><code>sarchiso login: root (automatic login)</code></p><br>"},
    {text:`<!--<img src=\"img/404.png\"></img>--><div class=\"textError\"><pre>
                                                       
       444444444         000000000              444444444  
      4::::::::4       00:::::::::00           4::::::::4  
     4:::::::::4     00:::::::::::::00        4:::::::::4  
    4::::44::::4    0:::::::000:::::::0      4::::44::::4  
   4::::4 4::::4    0::::::0   0::::::0     4::::4 4::::4  
  4::::4  4::::4    0:::::0     0:::::0    4::::4  4::::4  
 4::::4   4::::4    0:::::0     0:::::0   4::::4   4::::4  
4::::444444::::444  0:::::0 000 0:::::0  4::::444444::::444
4::::::::::::::::4  0:::::0 000 0:::::0  4::::::::::::::::4
4444444444:::::444  0:::::0     0:::::0  4444444444:::::444
          4::::4    0:::::0     0:::::0            4::::4  
          4::::4    0::::::0   0::::::0            4::::4  
          4::::4    0:::::::000:::::::0            4::::4  
        44::::::44   00:::::::::::::00           44::::::44
        4::::::::4     00:::::::::00             4::::::::4
        4444444444       000000000               4444444444
                                                       
                                                       
                                                       </pre></div><br><br><p onclick=\"goTo()\" class=\"option_C\"><code style=\"color:red\">&nbsp;&nbsp;&nbsp;&nbsp;1) go to home</code></p><p onclick=\"contactMe()\" class=\"option_C\"><code style=\"color:red\">&nbsp;&nbsp;&nbsp;&nbsp;2) contact me</code></p><br>`},
    {text:"<input type=\"text\" style=\"display:contents;\" id=\"input_t\"><code><code style=\"color:red\">root</code>@sarchiso<code style=\"color:yellow\">~#</code>&nbsp;</code>"},
];
const textBye = "<br><p><code style=\"color:white;font-size:24px;\">&nbsp;&nbsp;&nbsp;&nbsp;Good Bye  :D</code></p> <br> <code><code style=\"color:red\">root</code>@sarchiso<code style=\"color:yellow\">~#</code>&nbsp;</code>";
const textContact = "<br><p><code style=\"color:white;font-size:24px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Write to email: <code style=\"color:yellow\">contact@sergioribera.com</code></code></p> <br> <code><code style=\"color:red\">root</code>@sarchiso<code style=\"color:yellow\">~#</code>&nbsp;</code>";
