# 1. Fix the ERR_SSL_PROTOCOL_ERROR

## 1.1. Install mkcert tool

Following mkcert windows setup [instructions](https://github.com/FiloSottile/mkcert#windows):

"On Windows, use [Chocolatey](https://chocolatey.org)

```
choco install mkcert
```

or use Scoop

```
scoop bucket add extras
scoop install mkcert
```

or build from source (requires Go 1.10+), or use [the pre-built binaries](https://github.com/FiloSottile/mkcert/releases).

If you're running into permission problems try running `mkcert` as an Administrator."

## 1.2. Create local CA authority

If is not already created, use this command to create your local CA.

```PowerShell
mkcert -install
```

## 1.3. Create your project certificate(ONLY for development purposes)

You local machine already has a localhost certificate but it was issued for IIS purposes. There is nothing bad if you want to use it in a react app, however it is really hard to find the file path location of that certificate. Therefore use the follow command to create a brand new certificate in order to use in your react app.

```PowerShell
mkcert localhost
```

## 1.4. Create and configure .env file

(Please follow the official documentation meanwhile creating .env files.) 

Create .env file in your react app folder root and place the follow configurations.

```
SSL_CRT_FILE=localhost.pem 
SSL_KEY_FILE=localhost-key.pem
```

Make sure that you restart all your react-app processes.