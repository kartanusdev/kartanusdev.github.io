---

layout: postPage

title: "C贸mo personalizar la terminal de GNU/Linux con Zsh, Oh My Zsh y Powerlevel10k? 馃帹"

description: "Zsh es una shell con gran cantidad de complementos que incrementan nuestra productividad. Dado que existen un sinn煤mero de plugins y temas que podemos incorporar. D茅jame mostrarte c贸mo instalarla en GNU/Linux de una manera r谩pida y sencilla."

categories: [linux, customization]

permalink: /:categories/como-personalizar-terminal-de-ubuntu-con-zsh-y-powerlevel10k

author: Kartanus

authorImg: https://avatars.githubusercontent.com/u/98678109?s=400&u=b5ac4ff1f9efe07fdd83952796a8c43ff4115dc6&v=4

tags: [linux, customization]

---

## Instalar ZSH
Para hacernos con zsh var铆a mucho qu茅 distribuci贸n de GNU/Linux estemos utilizando. Por ello aqu铆 tienen instrucciones a las m谩s com煤nes.

### SUSE / OpenSUSE
```
$ sudo zypper install zsh
```

### Arch linux / Manjaro y derivados
```
$ sudo pacman -S zsh
```

### Fedora
```
$ sudo dnf install zsh
```

### Ubuntu, Debian, Linux Mint y derivados
```
# Opci贸n 1 
$ sudo apt install zsh
# Opci贸n 2
$ sudo apt-get install zsh
```

Si no has encontrado detalle para tu distribuci贸n, te invito a leer la **<a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH" target="_blank" rel="noopener">documentaci贸n oficial de zsh.</a>**

Para corroborar que se haya instalado correctamente, mostraremos la versi贸n de zsh en el terminal utilizando el siguiente comando:

```
$ zsh --version # zsh 5.8 (La versi贸n puede ser diferente!)
```

## Configurando ZSH
Listo! Si todo a ido bien, deber铆as de tener zsh instalado en tu GNU/Linux. Lo pr贸ximo es reemplazar el shell actual por el de zsh. Para esto debemos de introducir un comando.

```
# Seleccionar a zsh como shell por defecto
$ chsh -s $(which zsh)
```

Para que los cambios sean reflejados, necesitamos **reiniciar la pc**. Lo podemos hacer r谩pidamente con el comando `reboot`

Cuando vuelvas a abrir tu consola, es posible que te aparezca lo siguiente:

```
(q)  Quit and do nothing.  The function will be run again next time.

(0)  Exit, creating the file ~/.zshrc containing just a comment.
    That will prevent this function being run again.

(1)  Continue to the main menu.

(2)  Populate your ~/.zshrc with the configuration recommended
    by the system administrator and exit (you will need to edit
    the file by hand, if so desired).
```

Lo mostrado no es m谩s que una "bienvenida" de zsh, inform谩ndonos que no existe ninguna configuraci贸n previa, estamos desde cero. Para continuar, **basta con colocar 0**.

## Instalaci贸n de Oh My Zsh
Oh My Zsh es un framework open-source que trabaja con zsh. Su funci贸n general es **proveer de un superpack de utilidades**: funciones, temas, plugins para gestionar la configuraci贸n de Zsh. Dato curioso: En Bash tenermos a Oh My Bash.

Para la instalaci贸n es necesario tener instalado `zsh`, `git`, `curl` 贸 `wget`.

```
# Instalar Oh My Zsh v铆a curl
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Y seguramente, una vez lo tengas, ver谩s c贸mo tu terminal se llenar谩 de colores 馃寛

## Configuraci贸n de las Nerd Fonts
Si no has escuchado hablar de ellas, te lo explico r谩pido. Son fuentes que incluyen un buen n煤mero de iconos. Estos pueden servir a la hora de trabajar en la terminal y querer mostrar 铆conos desde tu misma fuente. Esto es casi obligatorio a la hora de instalar temas de zsh y el "est谩ndar" viene siendo la fuente **<a href="https://github.com/ryanoasis/nerd-fonts/tree/master/patched-fonts/Meslo" target="_blank" rel="noopener">Meslo</a>**, aunque tienes el cat谩logo oficial en el repositorio de **<a href="https://github.com/ryanoasis/nerd-fonts/blob/master/readme_es.md#patched-fonts" target="_blank" rel="noopener">Nerd Fonts</a>**.

Ojo que cuando entres en los archivos del repositorio de fuentes tendras que tener cuidado, ya que las fuentes `mono` son aquellas que no tienen ligaturas (Las ligaduras son las que permiten mostrar combinaciones de car谩cteres para formar uno nuevo. Me explico, si has utilizado Microsoft Word o alg煤n editor de texto inteligente, habr谩s notado que a la hora de escribir car谩cteres como lambda se genera un car谩cter nuevo. En programaci贸n tambi茅n se usan, y mucho, ya que en v茅s de hacer una flecha representada por un signo '=' y otro '>' se genera un nuevo car谩cter). En este imagen se aprecian ciertos ejemplos.

<figure>
    <img width="100%" loading="lazy" alt="Font ligatures" src="https://repository-images.githubusercontent.com/26500787/bf313080-6b02-11ea-9cd5-c3dca880736d"/>
</figure>

Pulsando **<a href="https://github.com/powerline/fonts/blob/master/Meslo%20Dotted/Meslo%20LG%20S%20DZ%20Regular%20for%20Powerline.ttf" target="_blank" rel="noopener">aqu铆</a>** podr谩s descargar la fuente. Despu茅s de instalarla, lo siguiente ser谩 acceder a las propiedades de tu terminal y seleccionar la fuente con el nombre 'Meslo LG S DZ Regular for Powerline'. Ojo que si deseas puedes optar por otra **<a href="https://github.com/ryanoasis/nerd-fonts/blob/master/readme_es.md#patched-fonts" target="_blank" rel="noopener">Nerd Font</a>**.

## Instalaci贸n del tema Powerlevel10k
Este tema es uno de los m谩s populares que trabajan con el framework de Zsh. Para hacer un uso correcto es necesario que instales una Nerd Font.

Para instalarlo a trav茅s de Oh My Zsh utilizaremos las siguientes instrucciones:

```bash
# Clonamos el repositorio
$ git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

Una vez instalado necesitamos indicarle a Oh My Zsh qu茅 tema utilizar. Para eso tenemos que modificar el archivo `~/.zshrc`.

```bash
# Opci贸n 1: Abrir en vim
$ vim ~/.zshrc

# Opci贸n 2: Abrir en vscode
$ code ~/.zshrcs
```

Una vez dentro, debemos de buscar la sentencia `ZSH_THEME` que se encuentra alrededor de la l铆nea 11. Probablemente veas un valor parecido a `ZSH_THEME="robbyrussell"`. 

Tendr谩s que cambiar el valor "robbyrussell" por `powerlevel10k/powerlevel10k`. Una vez hecho esto guardamos el documento y **reiniciamos la terminal**.

## Configuraci贸n de Powerlevel10k
Ahora ir谩s viendo un men煤 con diferentes preguntas. Estas las debes responder de acuerdo a tu configuraci贸n, adem谩s en la pregunta de `Instant Prompt Mode` por ahora marca **Verbose: La opci贸n recomendada.** Por 煤ltimo terminamos la configuraci贸n y guardamos los cambios con la letra (y).

Supongamos que no quedaste satisfecho con tu configuraci贸n y deseas cambiarla. Para eso puedes colocar el comando `p10k configure` y tendr谩s el men煤 de configuraci贸n de vuelta! 馃帹