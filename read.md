# TRACCIA

Scrivere un programma che chieda all'utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

# SVOLGIMENTO

- Chiedo i km da percorrere all'utente.
- Creo un menu per selezionare l'età del passeggero.
- Moltiplico i km inseriti per 0.21(prezzo di un km percorso)


**SE** l'età selezionata del passeggero è minore di 18 anni:
- Applico uno sconto del 20%.

**ALTRIMENTI SE** l'età selezionata del passeggero è maggiore di 65 anni:
- Applico uno sconto del 40%.

-Stampo il prezzo.