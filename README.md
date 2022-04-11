## Universiteti i Prishtinës - Fakulteti i Inxhinierisë Elektrike dhe Kompjuterike
# Detyra e dyte ne lenden: Rrjeta Kompjuterike
<pre>Komunikimi Client-Server duke perdorur TCP protokolet, kryesisht ne node.js.</pre> 
<pre>Ne kete projekt eshte bere lidhja e klientit me server permes programimit me sockets.</pre>

<pre>Projekti eshte punuar nga:
1. Blerina Beka
2. Blerina Durguti
3. Blerta Ujkani
4. Blinera Kadriu 
</pre>
<pre> Profesori: PhD.c Mërgim Hoti </pre>

# Kerkesat 

                    -----------------Server-----------------
-  Të vendosen variabla te cilat përmbajnë numrin e portit (numri i portit të jetë i
   çfarëdoshëm) dhe IP adresën.
-  Të jetë në gjendje të dëgjojë (listen) të paktën të gjithë anëtaret e grupit.
-  Të pranojë kërkesat e pajisjeve që dërgojnë request (ku secili anëtarë i grupit duhet te e
   ekzekutoje të paktën një kërkesë në server).
-  Të jetë në gjendje të lexoje mesazhet që dërgohen nga klientët.
-  Të jetë në gjendje të jap qasje të plotë të paktën njërit klient për qasje ne folderat/
   përmbajtjen në file-t në server.

                   -----------------Client-----------------
-  Të krijohet socket lidhja me server.
-  Njeri nga pajisjet (klientët) të ketë privilegjet write(), read(), execute().
-  Klientët tjerë të kenë vetëm read() permission.
-  Të behet lidhja me serverin duke përcaktuar sakt portin dhe IP Adresën e serverit.
-  Të definohen sakte socket e serverit dhe lidhje të mos dështojë.
-  Të jetë në gjendje të lexojë përgjigjet që i kthehen nga serveri.
-  Të dërgojë mesazh serverit si në formë tekstit.
-  Të ketë qasje të plotë në folderat/ përmbajtjen në server.  

