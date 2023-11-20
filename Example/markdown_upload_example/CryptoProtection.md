# Crypto Protection

## Introduzione

- confidenziaità dei dati 

- integrità dei dati 
- autenticità dei messaggi

strategia genrale si scambiano chiave e cominciano a scambiarsi dati 

necessario che ci siano delle chiavi, usate per cifrare e decifrare (chiavi per confidenzialità e integrità sono diverse).

## Problemi

### politici 

trattato di wassenaar si elencano quello che sono le armi strategiche di un paese, il trattato dice essenzialmente trovata arma me la tengo per me e non posso venderla ad altri paesi. Tra questi ci sono anche gli algoritmi di crittografia. 
**problema** non si possono esportare algoritmi criptografici. 

questa situazione era nei primi anni 2000

sono state fatte delle deroghe, devono essere autorizza per poter essere esportate. 

### tecnici 

scegliere se implementare crittografia simmetrica o asimmentrica (scelta entrambe). 

### dove mettiamo la crittografia

livello rete ? livello trasporto ? livello applicazione ? 

quali sono le differenza ?

a livello di rete lo dovrebbe fare IP, saremmo in grado di cifrare il traffico che va verso certi host  ( non riusciamo a distinguere il traffico)

a livello trasporto abbiamo qualche info in più i protoccolli. 

a livello applicativo abbiamo più informazioni, però andiamo a proteggere meno roba. 

le scelte che si sono fatte è mettere a disposizioni degli strumenti per tutti e tre i livelli. 

la crittografia end to end solo a livello rete. 

# Approcci utilizzati per comunicazioni sicure 

## Livello rete IP 

viene fatta cifrando traffico solo verse determinate destinazione ( non posso cifrare tutto ). 

decido quali sono gli algoritmi che volglio utilizzare, devo considerare anche l'efficenza non solo la robustezza

comunicazione tra due host devo scegliere cosa cifrare 

viene introdotto IPsec modulo di IP che va security (preso da IPV6 e messo in IPV4). 

cosa fa ? 

risolve una serie di problemi ( guardo quali)

interviene pesantemente e modifica la struttura attraverso degli header 

## Servizi

- autenticazione se mi arriva un pacchetto da un certo IP so che qull'IP è effettivamente quello che mi ha inoltrato il pacchetto.
- confidenzialità 
- integrità dei singoli pacchetti 
- anti replay (replay : prende dei pacchetti li cattura, li copia  e li ributtoa in rete) fatto grazie al sequel numbers 
- traffic flow confidentiality (per evitare traffica analisis ). 

è assolutamente trasparente alle applicazioni, chi scrive applicazioni si può disinteressare. (rinunciando a end to end). 

si può decidere se fare autenticazione o end-cription (autenticazione, controllo di integrità dei pacchetti ). 

- AH 
- ESP 

due modi di incapsulazioni 

- transport mode
- tunnel mode 

perchè non tutti implementano IPsec quindi devono poter gestire queste modalità 

## Come Lavora

arriva un pacchetto devo decidere se applicare delle trasformazioni criptografice tramite IPsec oppure no 

**Invio**

1. arriva pacchetto
2. viene consultato SPD (security policy database), ci dice se va modificato oppure no 
3. se scelgo di modificarlo devo selezionare quale serviziono voglio usare 
4. guardo SAD (security assosiation database) si può conficurare manualmente 
5. so come deve essere traformato 
6. faccio trasformazione, applico IP sec
7. mando in rete 

**Ricezione** 

1. ricevo pacchetto IPsec, deve sapere con che algortimo ha cifrato 
2. Controlla SAD
3. applica trasformazioni 
4. verifica se è congruo con le sue politiche (SPD)
5. invia a livello superiore

## Security Policy 

ci dice se criptare il traffico

due database uno per traffico entrante e uno per traffico uscente 

determinata da 3 campi 

- insieme di parametri che 
- tipo di tr-
-  

```
SP = < SEL, ESP, NONE >
```

## Security Association SAD 

come trattare il traffico

è solo in un senso

come deve essere gestito quel traffico 

paramentri  che consento di fare ricerca all'interno del DB e confine tutti i paramentri per la trsformazione

- Sequence number 
- Anti -replay 
- Protocol 
- Trasporto 
- Modalità 
- cifratura 
- Autenticazione 
- Roba .. 

la parte che viene mandato a chi gestisce il database e la parte di SPD mentre SAD viene gestito tramite IKE

## IPsec Protocol 

**autenticazione e confidenzialità**

- AH 
- EAH 

##### Autentication Header AH

aggiunge un header per l'autenticazione

viene cifrato doppio tramite chiave condivisa

aggiungo ... 

##### ESP Packet 

aggiungo ... 

posso avere anche entrambi 

#### Encapsulation Modes 

esistono due modi per gestire traffio IPsec

- **tunnel mode** non serve che conosca IPsec
- **transport mode** richiede che tutti gli host che ricevono il pacchetto conoscano IPsec, lo uso quando tutti i router sappiano leggere questo pacchetto 

tunnel mode usato tipicamente per le VPN

#### Prevenzione Replay attack 

IPsec fa prefenzione contro replay attack tramite sequence number, se arrivva un pacchetto con un numero di seequenza più alto rispetto quello che ci si aspetta il pacchetto non viene consegnato finchè non arrivano quelli precedenti 

#### IKE

obbiettivo procurare materiale criptografico 

prevede scambio di chiave 

composto da 3 protocolli 

- ISAKMP definisce modalità quali sono i protocolli ammessi.
- Oakley 
- ....

##### Diffie Hellman algoritmo

utilizza logaritmo discreto , trasposizione del logaritmo in campi reali in campi modulo n, la soluzione non è sempre possible, e sempre possibile per n primi. 

ad oggi non esistono algoritmi polinomiali per risolverlo. se ho b^y e devo trovare x modulo n facile difficile se non ho y 

![algoritmo](/Users/davidevigano/Documents/Sicurezza/SicurezzaFoto/algoritmo.jpeg)

**Attenzione** problema MAN in the Middle

 ![problemaAlgo](/Users/davidevigano/Documents/Sicurezza/SicurezzaFoto/problemaAlgo.jpeg)

# Transport Level Security 

## Come funziona

abbiamo due host che comunicano

il server scopre che vuole una versione sicura perchè il client si collega su una porta **443** dove risponde TLS

preriquisito fondamentale autenticazione 2 modi 

- solo browser verifica identità server (**server only**) + usata
- entrambi verificano identià (**Mutual autentication**)

tramite protocollo di Hand-sake stabiliscono le modalità di comunicazione. 

## SLL handshake

scrivo come funziona........

Cyphersuite 2 byte che specificano modalità di cripton/decripton e hashing (come vogliono comunicare).

ci può essere una trattativa della SLL 

una volta messi daccordo sugli algoritmi manca da calcolare il master_secret 

tramite il risultato tirano fuori le chiavi criptografiche. 



molto più snello di IPsec la parte di handshake è la parte che fa IKE

# WI-FI Security

## WEP 

brutto esempio per tecniche criptografiche

passweord condivisa 

il segreto viene utilizzato oltre per l'aautenticazione anche per la cifratura

XOR tra pacchetto originale e RC4 ( vettore inizilizzazione e chiave) per cifrare 

faccio il contrario per decifrare 

**Brief description**  guardo 

##### Problema

uso della chiave che viene data a RC4, succede che se la chiave viene usata più volte e intercettiamo due messaggi riesco ottenere lo XOR dei due messaggi, se conosco uno dei due messaggi posso risalire all'altro 

il vettore di inizializzazione viene trasmesso in chiaro , è possibile saper un pezzo dato che la chiave è sempre la stessa

dopo 16 milioni di messaggi l'IV si ripete, l'IV è incrementale 

###### attacco Decription Dictionary (non capito)

attaccante invia dato in chiaro al cliente wirless, il messaggio viene cifrato, contemporaneamente sniffa il traffico e facendo XOR tra plaintex e cyphertext  riesce a trovare la stringa di cifratura (K)



![DecriptionDictionary](/Users/davidevigano/Documents/Sicurezza/SicurezzaFoto/DecriptionDictionary.jpeg)

alla fine posso decifrare tutto il messaggio in chiaro dell'acces Point 

## WPA

Viene introdotto per superare i problemi di WEP ,è sempre basato su WEB, viene cambiato il meccanismo di RC4 e viene introdutto TKIP viene tolto il riuso del vettore di inizializzazione (rimane però sempre nel contesto WEP perchè era cablato a livello firmware).

usa RC4 (TKIP) modificato

è stao introdotto con due verisioni 

- personal mode WPA-EAP molto robusto, utilizza server di autenticazione il quale verifica l'identità 
- enterprise mode WPA-PSK utilizza pswd

## WPA2 

noto come 802.11i (è una specifica di sicurezza pre le comunicazionk wirless)

non ha la retrocompatibilità utilizza AES - CCMP che soppianta completamente RC4 → non più compatibile con le schede vecchie. 

##### Radius 

server di autenticazioni, detta il protocollo che deve essere utilizzato tra comunicazione client - server

## WPA3

basato su WPA2 basato su gli AOT, rafforzamento su protocolli di endcription.

introduce SHA-2. 

