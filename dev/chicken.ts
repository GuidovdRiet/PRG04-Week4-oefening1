/// <reference path="tree.ts"/>

class Chicken {
        
    public div: HTMLElement;
    public x:number;
    public y:number;
    public width:number;
    public height:number;

    constructor(x:number, y:number, tree:Tree) {
        this.div = document.createElement("bird");
        tree.div.appendChild(this.div);
                
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 110;
        
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";

        // maak hier een click listener
        // de click event handler moet een gun toevoegen
        // als de kip al een gun heeft, dan moet de fire() functie van de gun worden aangeroepen
    }

}