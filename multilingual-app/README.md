# Angular multi idioma
Ejemplo de aplicación con soporte multi idioma utilizando la internacionalización de Angular (i18n), incluye el soporte para los siguientes idiomas: Ingles (default), Español y Chino.

## Servidor de Desarrollo

Ejecutar `ng serve` para levantar la aplicación. Navegar a `http://localhost:4200/`. Por default el idioma de la aplicación es Ingles.

![enter image description here](https://lh3.googleusercontent.com/Eq6Ymw2i-fcsjhFsrjAN8FPEB6zE0NkzhR0khH-uxGqOu1GPnRXHWNaFh5FjXwRoKoKW9D7_vJ_s "Previsualización en idioma Ingles")  

## Traducción a otros Idiomas
Para levantar el servidor de desarrollo utilizando el soporte multi idioma es necesario ejecutar `ng serve --configuration=[es,zh]` según el idioma deseado; en este caso las opciones disponibles son: 

- es: Para idioma Español.
- zh: Para idioma Chino.

![enter image description here](https://lh3.googleusercontent.com/4wShJXcEAWRK5udH7_tQMVdVXULuVTJHfgUJeL8tfCLlbfT5NgX7YTccddz61yNU9lY-0ZMsH0jT "Previsualización en idioma Español")
![enter image description here](https://lh3.googleusercontent.com/t74oMKgvbQN_L_mj8tfwwgTdf67k9L6V5tjNEsgh74ZWQRRHqj_Ds0mjuZloGLLBtww4awMEeZja "Previsualización en idioma Chino")

## Tips adicionales
### Source y Target
Angular **i18n** utiliza 2 tags importantes `<source>` y `<target>` en donde **source** es el valor original en el maquetado web (html) y **target** será la traducción que deseamos aplicar.  

Ejemplo:
`<source>Login</source>`
`<target> Iniciar sesión </target>`

### Generar archivo base de traducciones
Para crear el archivo base para generar las reglas de traducción de **i18n** es necesario ejecutar `ng xi18n`. Esto generara un archivo *xlf* con el nombre *messages.xlf* el cual contiene todas las reglas para iniciar nuestras traducciones.

### i18n Select
Esta característica de **i18n** nos permite utilizar algo similar a una sentencia **switch** tradicional, evalua una variable en especifico y según su valor devuelve un texto o elemento en especifíco.

Ejemplo: 
`<source>{VAR_SELECT, select, Max Capacity {people} Max Adults Capacity {adults} Max Kids Capacity {minors} other {people} }</source>`

`<target>{VAR_SELECT, select, Max Capacity {personas} Max Adults Capacity {adultos} Max Kids Capacity {menores} other {personas} }</target>`