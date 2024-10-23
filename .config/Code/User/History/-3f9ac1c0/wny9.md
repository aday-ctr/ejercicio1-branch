## Libreria

## Clonamos el repositorio previamente creado

```code
git clone https://github.com/aday-ctr/ejercicio-git-libro.git

Clonando en 'ejercicio-git-libro'...
Username for 'https://github.com': aday-ctr
Password for 'https://aday-ctr@github.com': 
warning: Pareces haber clonado un repositorio sin contenido.

ls -la
total 16
drwxrwxr-x 3 pro pro 4096 oct 14 15:40 .
drwxrwxr-x 3 pro pro 4096 oct 14 15:39 ..
drwxrwxr-x 7 pro pro 4096 oct 14 15:41 .git
-rw-rw-r-- 1 pro pro  322 oct 14 15:45 README.md
```

## Ejercicio 1

### Mostramos el historial de cambios del repositorio.

```code
git log   
fatal: tu rama actual 'main' no tiene ningún commit todavía
```

### Creamos la carpeta capitulos.

```code
mkdir capitulos
```

### Creamos el fichero .txt

```code
cat > capitulos/capitulo1.txt
Git es un sistema de control de versiones ideado por Linus Torv
```

### Añadir los cambios a la zona de intercambio temporal.

```code
git add .
```

### Hacer un commit de los cambios con el mensaje Añadido capítulo 1.

```code
git commit -m "Añadido capítulo 1."
[main (commit-raíz) 5ad0e90] Añadido capítulo 1.
 2 files changed, 42 insertions(+)
 create mode 100644 README.md
 create mode 100644 capitulos/capitulo1.txt
```

### Volver a mostrar el historial de cambios del repositorio

```code
git log
commit 5ad0e9060ed3d2d96fb9e4d28d4df8a1d2e2f1f5 (HEAD -> main)
Author: aday-ctr <adaybolt@gmail.com>
Date:   Mon Oct 14 16:03:35 2024 +0100

    Añadido capítulo 1.
```

## Ejercicio 2

### Creamos el fichero .txt

```code
cat > capitulos/capitulo2.txt 
El flujo de trabajo básico con Git consiste en:
 1- Hacer cambios en el repositorio.
 2- Añadir los cambios a la zona de intercambio temporal.
 3- Hacer un commit de los cambios.
```

### Añadir los cambios a la zona de intercambio temporal.

```code
git add .
```

### Hacer un commit de los cambios.

```code
git commit -m "Añadido capítulo 2."
[main c01e574] Añadido capítulo 2.
 2 files changed, 49 insertions(+)
 create mode 100644 capitulos/capitulo2.txt
```

### Mostrar las diferencias entre la última versión y dos versiones anteriores.

```code
git diff 5ad0e9060ed3d2d96fb9e4d28d4df8a1d2e2f1f5..HEAD
diff --git a/README.md b/README.md
index a0cd1d4..6fd6613 100644
--- a/README.md
+++ b/README.md
@@ -39,3 +39,48 @@ mkdir capitulos
 cat > capitulos/capitulo1.txt
 Git es un sistema de control de versiones ideado por Linus Torv
```

## Ejercicio 3

### Crear el fichero

```code
cat > capitulos/capitulo3.txt
Git permite la creación de ramas lo que permite tener distintas versiones del mismo proyecto y trabajar de manera simultanea en ellas.
```

### Añadir los cambios a la zona de intercambio temporal.

```code 
git add .
```

### Hacer un commit de los cambios.

```code
git commit -m "Añadido capítulo 3."
[main c7f96a3] Añadido capítulo 3.
 2 files changed, 38 insertions(+)
 create mode 100644 capitulos/capitulo3.txt
```

### Mostrar las diferencias entre la primera y la última versión del repositorio.

```code
git diff 5ad0e9060ed3d2d96fb9e4d28d4df8a1d2e2f1f5..HEAD
diff --git a/README.md b/README.md
index a0cd1d4..5e0cd3a 100644
--- a/README.md
+++ b/README.md
@@ -39,3 +39,85 @@ mkdir capitulos
 cat > capitulos/capitulo1.txt
 Git es un sistema de control de versiones ideado por Linus Torv
```

## Ejercicio 4

### Crea el fichero

```code
cat >indice.txt
Indice de los cápitulos, con conceptos avanzados de git
```

### Añadir los cambios a la zona de intercambio temporal.

```code
git add .
```

### Hacer un commit de los cambios y guardamos los cambios.

```code 
git commit -m "Se crea el indice."
[main 90c93c0] Se crea el indice.
 3 files changed, 56 insertions(+), 1 deletion(-)
 create mode 100644 indice.txt
 create mode 100644 kj gshkbr

echo "Indice de los cápitulos, con conceptos avanzados de git" >> indice.txt

git add .
```

### Mostrar quién ha hecho cambios sobre el fichero indice.txt.

```code
git commit -m "Añadido el índice ."
[main 2bbb386] Añadido el índice .
 2 files changed, 14 insertions(+), 1 deletion(-)

git annotate indice.txt
90c93c0d        (  aday-ctr     2024-10-14 16:39:33 +0100       1)Indice de los cápitulos, con conceptos avanzados de git
2bbb386c        (  aday-ctr     2024-10-14 16:42:38 +0100       2)Indice de los cápitulos, con conceptos avanzados de git

git add .
```

## Ejercicio 5

### Crear una nueva rama bibliografía y mostrar las ramas del repositorio.

```code
git branch bibliografia

git branch -av
  bibliografia        2bbb386 Añadido el índice .
* main                2bbb386 [adelante 3] Añadido el índice .
  remotes/origin/main c01e574 Añadido capítulo 2.

git add .
```

## Ejercicio 6

### Crear el fichero

```code
cat > capitulos/capitulo4.txt
En este capítulo veremos cómo usar GitHub para alojar repositorios en remoto.
```
Para salir usamos **Ctrl+D**

```code
git add .
```

### Hacer un commit

```code
git commit -m "Añadido capítulo 4."
[main e34e1c0] Añadido capítulo 4.
 3 files changed, 48 insertions(+), 17 deletions(-)
 create mode 100644 capitulos/capitulo4.txt
 delete mode 100644 kj gshkbr
```

### Mostrar la historia del repositorio incluyendo todas las ramas.

```code 
git log --graph --all --oneline
* e34e1c0 (HEAD -> main) Añadido capítulo 4.
* 2bbb386 (origin/main, bibliografia) Añadido el índice .
* 90c93c0 Se crea el indice.
* c7f96a3 Añadido capítulo 3.
* c01e574 Añadido capítulo 2.
* 5ad0e90 Añadido capítulo 1.
```

## EJercicio 7

### Cambiar a la rama bibliografía.

```code
git checkout bibliografia
error: Los cambios locales de los siguientes archivos serán sobrescritos por checkout:
        README.md
Por favor realice un commit con los cambios o un stash antes de cambiar ramas.
Abortando
```

### Crear el fichero bibliografia.txt y añadir la siguiente referencia:

```code
cat > bibliografia.txt
- Chacon, S. and Straub, B. Pro Git. Apress.
```

**Ctrl+D**

### Añadir los cambios a la zona de intercambio temporal.

```code
git add .
```