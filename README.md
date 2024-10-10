# Entornos de Desarrollo: Comenzando con Git "Trabajando con Branchs"

## Clonación del repositorio

```code
git clone https://github.com/aday-ctr/ejercicio1-branch
Clonando en 'ejercicio1-branch'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0 (from 0)
Recibiendo objetos: 100% (3/3), listo.
```
## Se incluye el commit 

```code
git commit -m "Se incluye la descripción inicial de la tarea"
[main 7ac1b07] Se incluye la descripción inicial de la tarea
 1 file changed, 12 insertions(+), 1 deletion(-
```
## Se a subido el archivo

```code
git push
Enumerando objetos: 5, listo.
Contando objetos: 100% (5/5), listo.
Compresión delta usando hasta 2 hilos
Comprimiendo objetos: 100% (2/2), listo.
Escribiendo objetos: 100% (3/3), 512 bytes | 23.00 KiB/s, listo.
Total 3 (delta 0), reusados 0 (delta 0), pack-reusados 0
To https://github.com/aday-ctr/ejercicio1-branch
   8d06d4f..7ac1b07  main -> main
```

## Se añade la siguiente clase al reporitorio
```code
     public class Ejercicio1 {
     public static void main(String[] args) {
         System.out.println("Ejercicio 1 realizado.");
     }
 }    
 ```

 ## Hacer commit de los cambios
 ```code
git commit -m "Se incluye el Ejercicio1.java"
[main b7f31f8] Se incluye el Ejercicio1.java
 1 file changed, 20 insertions(+)
 ```

 ## Sube los cambios a tu repositorio
 ```code
git push origin ejercicio1-branch
Total 0 (delta 0), reusados 0 (delta 0), pack-reusados 0
remote: 
remote: Create a pull request for 'ejercicio1-branch' on GitHub by visiting:
remote:      https://github.com/aday-ctr/ejercicio1-branch/pull/new/ejercicio1-branch
remote: 
To https://github.com/aday-ctr/ejercicio1-branch
 * [new branch]      ejercicio1-branch -> ejercicio1-branch
 ```
 ## Fusiona las ramas en main
 ```code
git checkout main
git merge ejercicio1-branch
M       README.md
Ya en 'main'
Tu rama está adelantada a 'origin/main' por 1 commit.
  (usa "git push" para publicar tus commits locales)
Ya está actualizado.
 ```

 ## Realiza la subida de los cambios al rapositorio
 ```code
git push        
Enumerando objetos: 5, listo.
Contando objetos: 100% (5/5), listo.
Compresión delta usando hasta 2 hilos
Comprimiendo objetos: 100% (3/3), listo.
Escribiendo objetos: 100% (3/3), 773 bytes | 773.00 KiB/s, listo.
Total 3 (delta 0), reusados 0 (delta 0), pack-reusados 0
To https://github.com/aday-ctr/ejercicio1-branch
   4942f9a..b7f31f8  main -> main
 ```

 ## Creamos la segunda rama
 ```code
git checkout -b ejercicio2-branch
Cambiado a nueva rama 'ejercicio2-branch'
 ```
 ## Se añade la siguiente clase al reporitorio
```code
     public class Ejercicio2 {
     public static void main(String[] args) {
         System.out.println("Ejercicio 2 realizado.");
     }
 }    
 ```
 ## Hacer un comint de los cambios
 ```code

 ```
