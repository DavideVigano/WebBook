# Flussi di Gestione Documentale
## GESTIONE DOCUMENTALE
- Nella produzione editoriale possono esistere diversi flussi di 
creazione e gestione dei documenti
- Differiscono in base a
	- Flusso di lavoro
		- Qualità contenuti
		- Qualità formati, es. citazioni
	- Tecnologie 
		- Creazione
		- Condivisione 
		- Produzione

# Metadati
## METADATI
- I metadati sono ovunque, a volte invisibili ma presenti
	- Questa lezione ha un titolo, un docente, una durata, dei CdL
	- Un video su YouTube 
		- Titolo, autore, data, durata,categorie e licenze
		- Metadati generati dall’autore, scelti da una lista limitata, i commenti creati da altri, metadati generati automaticamente dal sistema
	- Una risorsa di archivio
		- Il principe, Nicolò Machiavelli
		- https://archive.org/details/ilprincipe04machgoog

<!---->
<br />

- Alcuni descrittori sono comuni a diverse categorie di oggetti.
	- Autore, titolo, data
- Altri sono specifiche del tipo dell’oggetto. 
	- Durata di un video, il numero delle pagine di un libro
- Alcuni sono stabili nel tempo altri variano
	- Autore, soggetto vs commenti, voci correlate 
- Alcuni valgono per ogni tipo di interazione altri dipendono dall’interazione
	- Titolo del corso vs CdL 
- Alcuni dipendono dal processo di raccolta
	- Tabulati telefonici 

## IL CASO DEI TABULATI TELEFONICI
- Nei tabulati telefonici non si raccoglie il contenuto delle 
telefonate
- Si raccolgono i metadati di queste telefonate
	- Il numero da cui parte la telefonata
	- Il numero cui si telefona
	- Il ripetitore che trasmette la telefonata e che consente di definire l’area geografica
	- L’ora e la durata della telefonata

​	![IL CASO DEI TABULATI TELEFONICI](img/L5.2-FlussiLavoroEditoriale-Metadati/IlCasoDeiTabulatiTelefonici1.jpg)

**Unique in the crowd: the privacy bounds of human mobility
http://www.nature.com/articles/srep01376**

## METADATI SONO DATI
- Metadati sono dati sui dati
	- Metadati sono descrizioni di un oggetto
	- Le descrizioni sono affermazioni su un oggetto, informazioni sull’oggetto
	- Siccome possiamo collegare oggetti a risorse informative che li descrivono e identificano possiamo dire che i metadati possono riferirsi a qualsiasi oggetto
		- Questa risorsa è un libro
		- Questo libro ha un autore
		- Questo autore ha un nome

<img src="img/L5.2-FlussiLavoroEditoriale-Metadati/MetadatiSonoDati1.jpg" alt="METADATI SONO DATI 1" width="200"/>​	
<!-- ![METADATI SONO DATI 1](img/L5.2-FlussiLavoroEditoriale-Metadati/MetadatiSonoDati1.jpg)-->

- Metadati sono dati sui dati
	- Metadati sono descrizioni di un oggetto
	- Le descrizioni sono affermazioni su un oggetto, informazioni sull'oggetto
	- Siccome possiamo collegare oggetti a risorse informative che li descrivono e identificano possiamo dire che i metadati possono riferirsi a qualsiasi oggetto

​	![METADATI SONO DATI 2](img/L5.2-FlussiLavoroEditoriale-Metadati/MetadatiSonoDati2.jpg)

## COSA SONO I DATI E COSA I METADATI? 
- Il censimento raccoglie metadati descrittivi sulla famiglia
	- Queste info rese pubbliche diventano dati
		- I metadati sono diventati dati
	- Conclusione: cosa siano i dati e cosa siano i metadati dipende dal punto di vista

​	![COSA SONO I DATI E COSA I METADATI 1](img/L5.2-FlussiLavoroEditoriale-Metadati/CosaSonoIDatiECosaIMetadati1.jpg)

## PERCHÉ I METADATI
- Per potere catalogare e concettualizzare i dati
	- Necessità di punti di accesso per ritrovare i dati
	- Necessità di un vocabolario condiviso per rendere interoperabile lo scambio di informazioni e per attivare processi di automazione
	https://www.crossref.org/documentation/
- Per potere disporre l’uso dei dati
	- Necessità di gestire il ciclo di vita di un dato: revisioni, versioning, autorizzazioni, diritti d’uso
	- Necessità di strumenti di validazione per verificare l’integrità del dato, la sua compatibilità con altri dati, l’autenticità

## TIPI DI METADATI
- Ci sono diverse tipologie di metadati
	- Descrittivi
	- Strutturali 
	- Amministrativi
	- Tecnici
	- Utilizzo
  
​	![TIPI DI METADATI 1](img/L5.2-FlussiLavoroEditoriale-Metadati/TipiDiMetadati1.jpg)
[Esempi](https://www.getty.edu/publications/intrometadata/setting-the-stage/)

## OGGETTO VS COLLEZIONE
- Una distinzione importante nella descrizione
	- Item è un singolo oggetto
	- Collezione è una raccolta di oggetti
- Un articolo vs il giornale
	- http://firstmonday.org/ojs/index.php/fm/index
- Una fotografia vs l’intera esibizione
	- http://exhibitions.europeana.eu/exhibits/show/europe-america-e

## CLASSIFICAZIONI MULTIPLE

- Ogni oggetto può essere classificato da diversi punti di vista e quindi essere descritto con diversi vocabolari controllati
  - Un monumento classificato dal punto di vista della locazione geografica, dello stile architettonico, dell’uso, dei materiali usati...
  - Un esempio di classificazione multipla è data dall’Art & Architecture Thesaurus del Paul Getty Institute che si trova online:
  http://www.getty.edu/vow/AATHierarchy

## STANDARD PER METADATI

|   |   |
|---|---|
| __Standard di strutturazione dei dati__ | MARC (Machine-Readable Cataloging) Format, Encoded Archival Description (EAD), BIBFRAME (Bibliographic Framework), Dublin Core Metadata Element Set, Categories for the Description of Works of Art, VRA Core |
| __Standard di valori dei dati (vocabolari controllati, thesauri, liste controllate)__ | Library of Congress Subject Headings, Name Authority File, and Thesaurus for Graphic Materials; Getty Art & Architecture Thesaurus, Union List of Artist Names (ULAN), and Thesaurus of Geographic Names; ICONCLASS; Medical |
| __Standard di organizzazione sintattica dei dati (regole e codici di__ | Anglo-American Cataloguing Rules, Resource Description and Access, International Standard Bibliographic Description, Cataloging Cultural Objects, Describing Archives: A Content Standard |
| __Formato dei dati/standard tecnici di interscambio__ | Resource Description Framework, MARC21, MARCXML, EAD XML DTD, METS, BIBFRAME, LIDO XML, Simple Dublin Core XML, Qualified Dublin Core XML, VRA Core 4.0 XML |

## STANDARD MARC

- Un formato di catalogazione introdotto negli anni ‘60 dal US Library of Congress
- Divenuto standard internazionale negli anni ’70
- Evoluto in una famiglia di standard: http://www.loc.gov/marc/umb/
- Una tipica scheda include:
  - La descrizione dell’oggetto
  - I campi principali, access point
  - Le parole chiave per soggetto
  - La classificazione e il numero di catalogazione 
  - Molte altre informazioni

​	![STANDARD MARC 1](img/L5.2-FlussiLavoroEditoriale-Metadati/StandardMarc1.jpg)

## LO STANDARD DUBLIN CORE

- Dublin, Ohio; quartier generale di OCLC – Online Computer Library Center
  - Non profit org., proprietari del sistema decimale Dewey; 
  FirstSearch e WorldCat, portali a diversi cataloghi
  - Workshop, marzo 1995. Come descrivere, organizzare e dare accesso all’informazione attraverso la rete
  - Mosaic, 1993: quindi il contesto web era poco conosciuto
- Definire uno standard per descrivere oggetti su scala web: a livello core cioè il minimo insieme di descrittori necessario per descrivere qualunque risorsa in rete

## SCOPO DEL DUBLIN CORE

- Semplicità
  - Basso costo di adozione tanto da non avere scuse
  - Basso costo per implementarla in applicativi di ricerca che la usano
  - Solo 15 elementi di metadati
- Semantica condivisa
  - Generalista e di conseguenza con perdita di specializzazione ma incremento di usabilità
- Estendibile
  - Anche per ovviare alla perdita di specializzazione
- Internazionale
  - Con possibilità di traduzione in più lingue, ma per lo più sviluppata in lingua inglese

## GLI ELEMENTI DI DUBLIN CORE

- Contributor
- Publisher
- Coverage
- Relation
- Creator
- Rights
- Date
- Source
- Description
- Subject
- Format
- Title
- Identifier
- Type
- Language

https://www.dublincore.org/specifications/dublin-core/dces/

## ELEMENTI, VALORI, RECORDS 
- Quando si descrive qualcosa si formula una frase. Uno schema di metadati controlla il tipo di frasi che si possono formulare e come
- Un vocabolario controllato per controllare i termini che si possono usare nella frase
  - Elemento
    - La categoria di frase che si può usare in uno schema di metadati per descrivere un oggetto
    - DC usa solo 15 elementi per formulare frasi ben formate
  - Valore
    - Le informazioni, i parametri che si passano all’elemento
    - DC spesso suggerisce di usare specifici vocabolari controllati
  - Record 
    - L’insieme delle coppie Elemento/Valore, cioè le frasi che si possono usare per descrivere le risorsa

## ESEMPIO

![ESEMPIO 1](img/L5.2-FlussiLavoroEditoriale-Metadati/ElementiValoriRecords1.jpg)

Title: Monna Lisa
Creator: Leonardo da Vinci
Subject: Lisa del Giocondo
Description: ritratto di donna
Date: c. 1503-1506
....
....
*Le coppie elemento/valore sono ripetibili e in qualunque ordine*

## PRINCIPI DI RILEVANZA
- Includere solo informazioni rilevanti – semplificare (principio 
dumb-down )
	- Subject non è rilevante per la descrizione di uno spartito? 
Language non è rilevante per descrivere un dipinto?     
Tralasciamo...
- Per ogni risorsa ci deve essere uno e un solo record che la descrive
	- No allo stesso record per due risorse
	- No a due record per la stessa risorsa

## ESEMPIO
![ESEMPIO 2](img/L5.2-FlussiLavoroEditoriale-Metadati/ElementiValoriRecords1.jpg)
Title: Monna Lisa
Creator: Leonardo da Vinci
Subject: Lisa del Giocondo
Description: ritratto di donna
Publisher:
Contributor:
Date: c. 1503-1506
Type:
Format: olio su legno di pioppo
Identifier:
Source:
Language:
Relation:
Coverage:
Rights: Musée du Louvre

## DC IN HTML

```<html>
 <head>
 <title>Record del dipinto di Leonardo</title>
 <meta name=“DC.creator” content=“Leonardo, da Vinci, 
  1452-1519”>
 <meta name=DC.title” content=“Monna Lisa”>
 <meta name=“DC.subject” content=“Lisa del Giocondo”>
 <meta name=“DC.date” content=“c. 1503-1506”>
 <meta name=“DC.format” content=“olio su legno”>
 </head>
 <body> contenuto della pagina web </body>
</html>
```

## ESEMPIO
![ESEMPIO 3](img/L5.2-FlussiLavoroEditoriale-Metadati/ElementiValoriRecords2.jpg)
Title: Monna Lisa
Creator: Leonardo da Vinci
Subject: Lisa del Giocondo
Description: ritratto di donna
Date: c. 1503-1506
Format: olio su legno di pioppo
Rights: Musée du Louvre

</br></br>

![ESEMPIO 4](img/L5.2-FlussiLavoroEditoriale-Metadati/ElementiValoriRecords1.jpg)
Title: Monna Lisa
Creator: chi ha creato img digitale
Subject: Lisa del Giocondo
Description: ritratto di donna
Contributor: Leonardo da Vinci
Publisher: Musée du Louvre
Type: image
Date: 2014
Format: JPEG
Identifier: URI dell’immagine
Relation: URI ad altra risorsa
Rights: Musée du Louvre

**Un record per l’originale, un record per l’immagine digitale e la relazione tra i due. L’immagine digitale è una rappresentazione dell’original**

## SCHEMA.ORG
- Diversi motori di ricerca come Google, Bing, Yahoo sono in grado di interpretare le descrizioni di alcune tipologie di contenuti se seguono lo schema definito da schema.org
- Queste descrizioni possono essere associate ad una pagina HTML 
usando diversi formati, il più diffuso sta diventando JSON-LD
https://developers.google.com/search/docs/guides/intro-structured-data
https://json-ld.org/playground/
- In questo modo i motori di ricerca possono costruire strutture 
dati più significative come Breadcrumbs, Sitelinks Search Box, 
Rich Card, Rich Snippets o (Google Knowledge Graph)

## VOCABOLARI NON CONTROLLATI 
- Ogni parola e ogni frase può essere usata per classificare
	- Al contrario dei vocabolari controllati in cui le parole usate per 
descrivere sono limitate 
  - I tag delle reti sociali sono un esempio di vocabolario non 
controllato:
		- YouTube non limita nell’uso di parole chiave
		- FaceBook limita a termini che devono già essere stati coniati 
nell’universo FB
		- Twitter usa gli hashtag, non tutti i tag sono descrittivi. A metà 
strada tra contenuto e metadato
		- Flicker usa tag completamente liberi

## TESAURO O VOCABOLARIO CONTROLLATO 
- Definisce le entità dell’universo che trattiamo e indica le parole che dobbiamo usare per parlarne
- LCSH fornisce la struttura di parole per definire i soggetti, che può essere modificata ed estesa, mediante un vocabolario controllato e strutturato
- Un elenco strutturato di parole, raggruppate per semantica, con alcune relazioni
  - BT – broader term, il termine più generale
  - NT – narrower term, il termine più specifico
  - RT – related term, un termine associato
  - USE – rimando a un termine da usarsi
  - UF – use for, rimando a un termine da non usarsi

## IL VOCABOLARIO CONTROLLATO LCSH 
- LCSH dal 1898 il prototipo di un sistema di metadati per la catalogazione del materiale librario
  - Da non confondere con la classificazione per collocare gli oggetti sugli scaffali, Library of Congress Classification
  - fornisce l’identificativo alfa-numerico, call number, o collocazione, che viene posto sul dorso dei libri per poterli ritrovare negli scaffali
- Definito da Putnam nel 1897

![IL VOCABOLARIO CONTROLLATO LCSH 1](img/L5.2-FlussiLavoroEditoriale-Metadati/IlVocabolarioControllatoLCSH1.jpg)


## ONTOLOGIE
- Nell’ingegneria della conoscenza, la rappresentazione formale di un insieme di concetti in un determinato ambito
  - Un insieme di termini di relazioni più complesse di quelle nei vocabolari controllati
    - Sussunzione: super- o sub-class
    - Meronimia: part-of
    - Istanziazione: type-of
    - Relazioni: simmetria, transitivi, riflessività
- Ontologia della birra
  - http://www.cs.umd.edu/projects/plus/SHOE/onts/beer1.0.html
- Ontologia per descrivere le persone che usa inferenze per stabilire fatti nuovi implicati da quelli noti
  - http://www.cs.umd.edu/projects/plus/SHOE/onts/personal1.0.html

## TESAURI VS ONTOLOGIE
- Le ontologie sono tesauri con relazioni formali: esprimono sottoinsiemi della logica del primo ordine
  - Nelle ontologie entità, relazioni e inferenze consentono di dedurre fatti non esplicitamente asseriti
- Le ontologie possono quindi essere usate in algoritmi, alcuni linguaggi
  - OWL https://www.w3.org/TR/owl-ref/
  - SWRL https://www.w3.org/Submission/SWRL/
- Alcuni formati di sterilizzazione:
  - RDF https://www.w3.org/TR/rdf11-concepts/
  - Turtle https://www.w3.org/TR/turtle/

## ESEMPIO DI CONCETTUALIZZAZIONE

![ESEMPIO DI CONCETTUALIZZAZIONE 1](img/L5.2-FlussiLavoroEditoriale-Metadati/EsempioDiConcettualizzazione1.jpg)
![ESEMPIO DI CONCETTUALIZZAZIONE 2](img/L5.2-FlussiLavoroEditoriale-Metadati/EsempioDiConcettualizzazione2.jpg)
![ESEMPIO DI CONCETTUALIZZAZIONE 3](img/L5.2-FlussiLavoroEditoriale-Metadati/EsempioDiConcettualizzazione3.jpg)
![ESEMPIO DI CONCETTUALIZZAZIONE 4](img/L5.2-FlussiLavoroEditoriale-Metadati/EsempioDiConcettualizzazione4.jpg)
![ESEMPIO DI CONCETTUALIZZAZIONE 5](img/L5.2-FlussiLavoroEditoriale-Metadati/EsempioDiConcettualizzazione5.jpg)
![ESEMPIO DI CONCETTUALIZZAZIONE 6](img/L5.2-FlussiLavoroEditoriale-Metadati/EsempioDiConcettualizzazione6.jpg)

## IDENTIFICARE
- Identificare un oggetto: 
  - https://it.wikipedia.org/wiki/Fabio_Fazio
  - https://it.wikipedia.org/wiki/Luciana_Littizzetto
- Si tratta di associare un oggetto o risorsa ad un identificatore che potrà essere utilizzato in modo univoco all’interno del vocabolario

<!---->
<br />

- Si tratta di associare un oggetto o una risorsa ad un identificatore che potrà essere utilizzato in modo univoco all’interno del vocabolario
  - Molti sono i criteri che si possono usare per decidere cosa considerare individuo: 
    - un oggetto indivisible
    - un’unità che non ammette riduzioni nel sistema di riferimento
    - un oggetto che ha una condizione di identità
    - un oggetto che è associato ad un identificatore
- Solitamente si considera individuo qualche cosa che permane (che identifichiamo all’interno di uno sfondo mutevole, o irrilevante, o composto da altri oggetti identificati)

<!---->
<br />

- Classificare un oggetto: 
  - https://it.wikipedia.org/wiki/Fabio_Fazio **type** https://it.wikipedia.org/wiki/Maschio
  - https://it.wikipedia.org/wiki/Luciana_Littizzetto **type**
  https://it.wikipedia.org/wiki/Femmina
- Si tratta di affermare che un oggetto appartiene ad una classe di oggetti: ovvero **condivide con altri oggetti uno stesso insieme di proprietà**

<!---->
<br />

- Si tratta di affermare che un oggetto appartiene ad una classe di oggetti: ovvero condivide con altri oggetti uno stesso insieme di proprietà
  - In una **buona classificazione** l’insieme di proprietà definito dalle classi dovrebbe essere:
    - reciprocamente esclusivo
    - congiuntamente esaustivo
    - pertinente
  - In realtà quasi tutti i vocabolari includono diverse criteri di classificazione, diverse dimensioni o punti di osservazioni, quindi ammettono intersezioni tra le classi che appartengono a dimensioni diverse

# LIBRO DIGITALE
## IL LIBRO ELETTRONICO
Il libro elettronico è un *documento digitale* per la lettura.

Il formato principale prende il nome di **ePUB** ed è stato definito dal **W3C**, anche Kindle conosciuto come **MOBI** o **AZW** è comunque importante

Questi documenti vengono distribuiti principalmente attraverso piattaforme chiuse accessibili mediante PC, dispositivi mobili o dispositivi dedicati

## INTERFACCIA
Le informazioni contenute all'interno del'testo vengono proposte attraverso un interfaccia che ha l'obbiettivo di replicare l'esperienza di lettura di un testo su carta
alcune funzionalità riprodotte sono:

- Sfogliare le pagine
- Posizionare un segnalibro
- Accesso random al contenuto
- Annotazioni

Vengono anche introdotte nuove funzionalità come:

- Ipertestualità
- Multimedialità
- Integrazione con dizionari e tesauri

## IDEAZIONE

Nei racconti e nei film troviamo diverse anticipazioni delle invenzioni tecnologiche:

-  Il cadetto dello spazio, 1948 di Robert Heinlein: racconto in cui troviamo telefoni cellulari e un sistema che proietta i testi sui banchi di scuola
- Chissà come si divertivano!, 1951 di Isaac Asimov: un racconto ambientato nel 2157 in cui si parla del ritrovamento di un antico libro a stampa
- Ritorno dall’universo, 1961 di Stanislaw Lem: racconto in cui si descrivono lettori con sintesi vocali (optoni e lectoni) e librerie digitali 
- 2001: Odissea nello spazio, 1968 romanzo di Arthur Clarke e film di Stanley Kubrick: il newspad
- Star Trek, serie TV del 1966 e film 2009: i PADD
- Cyberbooks, 1989 di Ben Bova: romanzo in cui è centrale l’idea di libro elettronico
- Minority Report, 2002 di Spielberg: quotidiano elettronico



Nelle tappe di avvicinamento all’e-book troviamo lavori pionieristici e intuizioni da fantascienza:

- Nel 1930 Bob Brown, sul giornale di avanguardia transition propone l’idea di una macchina portatile in grado di leggere testi di diverse dimensioni

- Nel 1949 Angela Ruiz Robles, una maestra spagnola realizza il primo lettore automatizzato. Piccole quantità di testo sono stampate su bobine e azionate da aria compressa che vengono.

- Memex, anni ‘40 di Vannevar Bush: dispositivo di lettura di testi conservati su microfilm, per semplificare ritrovamento e organizzazione dei testi. Più vicino all’idea di ipertesto che al libro

  

Studio delle interfacce di lettura e digitalizzazione elettronica dei testi:

- Alan Kay, anni ‘70, al PARC della Xerox, quando i computer erano grandi
  mainframe lavora all’idea di una informatica personale e di strumenti
  portatili. Dynabook strumento personale multifunzionale
- Michael Hart, anni ‘70, contributo fondamentale all’idea della
  digitalizzazione dei testi, iniziatore del Progetto Gutenberg, strumento
  per valorizzare il ruolo delle tecnologie e la rete per la di usione del libro

![rete](img/donnalibro.png)

L'ebook necessita anche di un punto di accesso, uno store:

- Nel 1993 BiblioBytes lancia il primo sito web che propone eBook
- Nel 1994 nasce Amazon, nel 1995 la prima libreria online
- Nel 1999, la casa editrice Simon & Schuster crea "ibooks" una iniziativa per pubblicare
  contemporaneamente titoli in formato eBook e cartaceo. La Oxford University Press ha o erto
  alcuni dei suoi libri attraverso un sistema chiamato netLibrary su Internet
- Il 1998 ha segnato il futuro degli eBook: sono stati lanciati i primi lettori di eBook, gli eBook
  hanno ottenuto l'ISBN, le biblioteche statunitensi hanno iniziato a fornire eBook gratuiti al
  pubblico
- Sony lancia il suo primo e-reader nel 2004
- Il mercatoNello stesso anno il lancio e il successo di iPhone dimostra il potenziale dei dispositivi digitali mobili
- Kobo (anagramma della parola book) dal 2010
- In Italia accordo con Mondadori e IBS.it per Pocketbook, Leggo **qui mettere link per ibs**



## DISPOSITIVI

- I lettori di libri digitali prendono il nome di **eReader** : dispositivi per la lettura di testi
- Basato su tecnologia per la visualizzazione dei caratteri, E-Ink,
  che non emette luce come un normale display dello schermo
  ma ri ette la luce ambientale come un foglio di carta.
- Tecnologia inventata da Jacobson, 1996, fondatore di E-Ink
- Adottata da quasi tutti i dispositivi eReader, generalmente a
  16 tonalità di grigio

![reader](img/eReader.png)

![reader](img/eReader2.png)



## FORMATI

Distinguiamo tra **formati immagine** e **formati di testo**:

- *DjVu*, formato immagine compresso che rappresenta l’immagine a livelli, usato
  per testi con alto contenuto gra co, supporta le funzioni di:
  - zoom, rotazione, salvataggio, esportazione, stampa
  - separazione del testo dallo sfondo e anche la ricerca su tutto il testo, se
    l’immagine è stata trattata con un sistema di riconoscimento ottico dei
    caratteri
- I formati di testo sono composti da:
  - file che descrivono la struttura del documento (di solito un le XML
    chiamato FictionBook 2.0)
  - file di testo che includono il contenuto
  - file multimediali inclusi nel documento
  - file di gestione del *DRM*
- Formati aperti:
  - *OeBPS*, il contenuto del libro è codi cato in le XHTML, legati tra loro per mezzo di un le
    XML, detto package le, e salvato con l’estensione .opf
  - *ePUB* si tratta di un formato basato su XML e composto da tre speci che aperte ideate per
    favorire la compatibilità potenziale con diversi dispositivi
- Formati proprietari:
  - *LIT*, Il formato deriva dall’OeBPS, a cui aggiunge sistemi di protezione del contenuto di vario
    livello
  - *Mobipocket*, si basa sullo standard OeBPS, utilizzando documenti in XHTML e permettendo
    anche l’inclusione di JavaScript e interrogazioni SQL
  - *Kindle*, Il formato AZW è sostanzialmente il formato Mobipocket con uno schema di erente
    per la generazione del numero seriale, inoltre i le sono protetti da uno speciale sistema DRM
  - *Multi-Touch* (.iBooks), si caratterizza per l’interazione con elementi multimediali quali gallerie
    fotogra che, video, diagrammi interattivi, oggetti 3D, quiz. Usato per prodotti con un grado
    avanzato di interazione come libri di testo, libri di cucina, libri di storia e libri illustrati



## EPUB

*ePUB* è uno standard aperto, un aggregazione di tecnologie diverse e già esistenti

Il suo nome completo è **Electronic Publication** ed è definito da *International Digital Publishing Forum*

La sua estensione è .epub

Il generico nome *Publication* sottolinea che ePub è un formato per documento generici e non per uno specifico tipo: Libri, riviste, giornali, documenti vari e in generale qualsiasi documento di testo distribuibile in formato digitale

Un documento EPUB è un contenitore di contenuti, un contenitore in grado di addattarsi ai diversi dispositivi di lettura

- ePUB è promosso dal International Digital Publishing Forum
- Consorzio di aziende che supportano lo sviluppo del formato
  ePUB, include editori, distributori, sviluppatori di lettori
- Sviluppa e mantiene il formato EPUB® per libri e documenti
  digitali a usso variabile per adattarsi a mezzi di lettura
  diversi
-  Favorisce la comunicazione tra gli attori del mercato editoriale
  digitale
- Dal 2017, IDPF si è fuso con il Consorzio W3C



## MOBI, AZW, KF8

- Formato proprietario mobipocket. Estensione .mobi
- Acquisito da Amazon per i device Kindle che leggono il formato .azw
  derivato da mobi
- Evolve in KF8, Kindle Format 8, dal 2011 con l’uscita di Kindle Fire
- Supporta HTML5 e CSS3
- Un sistema proprietario di protezione dei diritti DRM
- Vincola il le all’id dello strumento registrato su Amazon: no a 6
  sullo stesso account per condivisioni familiari e personali su più
  device
- Se i device di lettura vengono dismessi occorre de-registrarsi



## ENHANCED EBOOK

- eBook più tradizionali sono ancora ottenuti con formati ePub e mobi
- Enhanced ebook richiedono
- Formattazione complessa, illustrazioni, audio, video interazioni
- Sfruttano a pieno i formati avanzati ePub3 e KF8
-  Rimane la concorrenza di altri formati
-  PDF: interactive pdf con video ecc.
- Apps: pubblicare un libro come se fosse una App: layout sso: per
  facilitare la parte gra ca. Usato per i libri per bambini, libri di ricette da
  cucina, fumetti. Sono più complicati e costosi da realizzare
- Web app: rimuove il vincolo di produrre diverse versioni compatibili
  con i formati degli store. Base HTML, javascript e CSS3

## FATTORI DI SUCCESSO

- Sviluppati per la lettura su dispositive mobile. Serve lo stesso confort e libertà
  del libro di carta
- *Testo che si adatta* (**re-owable**). Mantenere la leggibilità su qualunque schermo
- *Lettura sia online che offline*. HTML sta solo ora (versione 5) aprendosi alla
  leggibilità o ine che è il vantaggio tradizionale degli eBook
- *Compattezza*. Per poter essere salvati anche su dispositive modesti aumentando
  l’audience potenziale
- *Tecnologie aperte e standard*. Attualmente si basano su HTML aprendo ad una
  platea vasta di persone con le competenze giuste per contribuire
- *Produzione economicamente non dispendiosa*. Sia la conversion dal cartaceo che
  la produzione di per se
- *Distribuzione diffusa*. Negozio di eBook globali. Facili da procurare



## FATTORI CRITICI

- Il concetto di re-owable ha fatto perdere il controllo al designer
  del libro, che quindi l’ha sempli cato all’osso.
- La promessa è nel responsive layout generato dinamicamente
  a seconda delle esigenze
- Non abbiamo ancora un singolo standard per gli ebook
- Incompatibilità con i device: dipende da come fanno il
  rendering
- DRM (Digital Rights Management) per evitare la copia illegali
  complica ancora di più i problem di compatibilità
- Ogni store cerca di favorire il suo ecosistema



## FLUID FRAMEWORK

![](img/fluidFramework.png)

- Microsoft ha reso disponibile in forma di preview la prima
  build di Fluid Framework,
- Creazione di documenti online interattivi.
- Web collaboration e dei servizi interattivi.
- Attualmente rilasciato
- Dividere il documento in più blocchi collaborativi, per poi
  analizzarli e modi cati da più App in tempo reale
- Documenti tradotti contemporaneamente in più lingue
- Fluid potrà interfacciarsi con Cortana o con altri servizi di
  intelligenza arti ciale, cosi da o rire immagini, video o altri
  dati basati sui contenuti scritti nel documento



#### DEMO

[](https://www.youtube.com/watch?v=RMzXmkrlFNg)



## INDESIGN CC

- InDesign Creative Cloud di Adobe
- leader mondiale nel mercato del Desktop publishing
- Strumenti per l’impaginazione e stampa su carta e creazione
  di documenti e libri digitali
- Importare le prodotti con InDesign o Word
- Applicare gli stili in InDesign, molto importante per
  l’ottimizzazione del codice
- Definire la sequenza degli elementi
- Esportare nel formato .ePUB o KF8 per Kindle
- Utilizza un formato proprietario .folio
- Permette di produrre materiale ricco di elementi
  multimediali e con layout complesso
- Convertire in App e pubblicare su Apps store
- Usato principalmente per Magazine e periodici, ma utile
  anche per enhanced eBook



[![Foo](img/indesigncc.png)](https://www.youtube.com/watch?v=FaJG3buRh2Y)



## IBOOKS AUTHOR

- Applicativo Apple per creare eBook
-  Formato proprietario di Apple: Multi-touch (iBooks2)
- Basato su ePUB3
- Se si vuole vendere un eBook prodotto è obbligatorio
  transitare da iBookstore
- Dal 2020 dismesso e sostituito da Apple Pages
- Il flusso di produzione è solo in uscita, non è possibile
  editare le esistenti



## LIBRE OFFICE / OPEN OFFICE

- Suite di produttività individuale, Open Source, sviluppato da
  The Document Foundation e da Apache Software Foundation.
  Contengono:

  - Writer - elaboratore testi

  - Calc - foglio elettronico

  - Impress - editor di presentazioni

  - Draw - editor gra co

  - Base - front-end per database compatibile con MySQL,
    PostgreSQL o Microsoft Access e altre fonti di dati

  - Math - editor di equazioni

    ![](img/libreoffice.png)



## WRITER2EPUB

- Estensione per LibreO ce o OpenO ce per convertire in
  eBook in formato ePub documenti di testo

- Scaricabile da : http://writer2epub.softonic.it/

  ![](img/writer2epub.png)



## SIGIL

- Un ePub editor multipiattaforma libero, open source

- un editor ePub wysiwyg ma anche via codice

-  un editor TOC Table Of Content

-  un ePub Validator e un editor per HTML

- Importa file html e testo TXT

- Supporta ePUB2 e alcune speci che di ePUB3

- Audio e video

- sito:https://code.google.com/p/sigil/

- repository:  https://github.com/user-none/Sigil

  ![](img/sigil.png)



## KINDLE DIRECT PUBLISHING

- Amazon Direct Publishing fornisce funzionalità per la stampa su carta
  e in digitale

- Lanciato nel 2007. Esistono diversi altri siti per il self publishing,
  autoedizione

  ![kindle direct publishing](img/kindleDirect.png)



## LULU

- Lulu è una casa editrice on demand. Nasce nel 2002 in Canada
  per iniziativa di Bob Young, fondatore anche di Red Hat

- Lulu fornisce agli autori un sistema automatizzato per la
  produzione editoriale, dalla creazione della copertina al
  formato del libro; ma si possono creare anche ebook, calendari
  e album fotogra ci

- Nel 2006 Lulu ha allargato la propria attività all'Europa	

  ![lulu](img/LULU.png)



## BOOKABOOK



- Vengono pubblicati i libri che raggiungono certi obiettivi in una
  campagna di crowdfunding nella quale i lettori possono pre
  ordinare il libro

-  Nata nel 2014 a Milano, ha ricevuto premi e riconoscimenti
  internazionali

-  https://bookabook.it

  ![BookABook](img/bookabook.png)



## YOU CAN PRINT IT

- Piattaforma italiana di slef-publishing che fornisce servizi editoriali

- Leggete l’intervista sulle prospettive dell’autopubblicazione:

   http://www.viverediscrittura.it/10-domande-sul-self-publishing-intervista-a-youcanprint/

- L’auto produzione si distingue sia dalla normale edizione sia dall'edizione a spese
  dell'autore

- Nel primo caso tutte le spese sono a carico dell'editore, che si incarica di
  realizzare e distribuire l'opera, promettendo una remunerazione del diritto
  d'autore in genere in forma percentuale

- Nel secondo caso, quello dell'editoria a pagamento, esiste sempre la gura
  dell'editore, ma le spese sono sopportate in tutto o in parte dall'autore o da chi lo
  sponsorizza

- Nel caso di autoedizione l'autore, invece, si incarica di seguire tutte le fasi della
  realizzazione dell'opera, avvalendosi eventualmente di qualche gura
  professionale esterna



## APPLICAZIONI EREADER



- Esistono numerose applicazioni per leggere e valutare un
  prodotto
- Adobe Digital Edition 4.5
- Cool Reader, Firefox con estensione EPUBReader
- Readium, plugin di Firefox, in sviluppo SDK per ePub3!!
- Kitabu per Mac della Sixty Four, compatibile ePub2 e 3
- Kindle, Nook, Azardi



## AZARDI, IGP



- AZARDI, 43.1 del 2016, InfoGrid Paci c
- ePUB3 reader per desktop
- Per tutti i sistemi operativi Linux, Mac e Windows
- Supporta ePub3 e ePub a layout sso, JavaScript e SMIL,
  HTML5, XHTML5, audio mp3, video mp4
- Per ottimare il codice applicare gli stili nei le che importate,
  e de nire la sequenza degli elementi
- Esportare nel formato .epub o KF8 per Kindle



## CALIBRE



- Calibre, Open Source, strumento multipiattaforma di gestione di e-book:	
  - Consente di creare e di leggere eBook
  - Supporta ePUB e Kindle MOBI
  - Consente la conversione tra formati (incluso il formato AZW3)
  - Consente la gestione dei metadati e l’organizzazione di collezioni e librerie
  - Supporta diversi e-book reader sincronizzando le librerie relative (Kindle,
    Sony, Nook…)
  - Consente ricerche in diversi negozi
  - Fornisce una funzione per raccogliere news da giornali online e
    trasformarle in eBooks

![Calibre](img/calibre.png)



#### MANUALI DI CALIBRE

- Editing eBooks :
  - https://manual.calibre-ebook.com/edit.html
- Video tutorial per diverse funzionalità (Grand Tour) e per
  editing:
  - https://calibre-ebook.com/demo#tutorials

#### CONVERSIONE DI FORMATI IN CALIBRE

- Molto di cile la conversione da PDF a ePUB
- Meglio la conversione da RTF o HTML a ePUB
- Si può anche redarre il le ePUB partendo da le TXT
- Maggiore lavoro per la de nizione degli elementi del testo e
  della sua struttura
- In input: ePUB, HTML, RTF, ODT, MOBI, TXT …
- In output: ePUB, LIT, MOBI, AZW (visibile poi solo su
  kindle)

#### CONSIGLI PER LA CONVERSIONE

Per facilitare la conversione in formato ePUB occorre:

- Non inserire formattazione inutile. Usare pochi semplici stili
  ed essere coerenti
- Non lasciare spazi tra i paragrafi
- Inserire immagini alla ne del paragrafo se possibile
- Eliminare la numerazione automatica delle pagine
- Eventuali note solo a fine capitolo o fine libro
- Evitare tabelle, riquadri o box di espansione



## CONVERSIONE DA .doc A EBOOK

- Salvare in formato rtf e con Calibre esportare in ePUB

- con OpenOffice o LibreOffice convertire in .ePUB tramite
  l’estensione Writer2ePub scaricabile da [lukesblog](https://lukesblog.it/)
- salvare in HTML e intervenire sul codice aggiungendo stili con CSS
- salvare in txt e intervenire molto pesantemente sul codice e
  sugli stili
- Con Pandoc si può partire da Markdown per avere un
  semplice HTML o .doc



## LE IMMAGINI IN EBOOK

- Gli schermi dei device hanno dimensioni molto diverse

- È opportuno che le immagini siano JPEG o PNG di circa 100/150 kb
- Dimensioni delle immagini 600x800 px per schermi di 5/6”
- Applicare con rigore e coerenza gli stili che vengono poi convertiti
  in codice CSS durante la fase di esportazione in ePUB
  - Questa attenzione rende il codice ePUB più semplice e pulito			
-  Definire la struttura del testo, tenendo conto dei diversi elementi
  (titolo, crediti, prefazione, capitoli o sezioni, indice…)
- importare i file dei media
- Esportazione in ePUB
- Conversione eventuale in altri formati (kindle)



## LETTURA ATTRAVERSO BROWSER

- Per attivare le potenzialità di condivisione che il web
  permette, ad esempio per annotazioni condivise o per logging
  delle azioni degli utenti serve una soluzione serverside
  fruibile con qualsiasi browser
-  [EPUB.js](https://github.com/futurepress/epub.js/) questa soluzione per pagina web ospitate su
  un server che include la libreria
  - Inclusione di un documento ePUB
  - Riferimento a porzioni del documento tramite URI
  - Annotazioni attraverso [hypothes.is](https://web.hypothes.is/)



## LAYER DI ANNOTAZIONI



- Il progetto [hypothes.is](https://web.hypothes.is/) intende realizzare un layer di
  annotazioni che può essere usato da gruppi di lavoro che
  intendono annotare pagine web
- Distinzione tra owner e user di una risorsa weB
-  Per annottare è richiesto un account a hypothes.is
- Esistono delle [API](https://h.readthedocs.io/en/latest/api-reference/v2/#tag/annotations) per accedere alle annotazioni