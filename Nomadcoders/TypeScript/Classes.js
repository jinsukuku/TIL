type Words = {
    [key: string]: string
    // object의 property의 이름과 값에 해당하는 데이터 타입을 지정할 수 있다
    // 일반적으로 [key: dataType] 으로 작성하며, key 대신 뭘 사용해도 상관없다
}

class Dict{
    private words: Words;
    constructor(){
        this.words = {}
    }
    printWords(){
        console.log(this.words)
    }
    add(word:Word){
        if(this.words[word.term] === undefined) this.words[word.term] = word.def;
    }
    updateDef(word:Word){
        if(this.words[word.term]) this.words[word.term] = word.def;
    }
    findDef(term:string){
        return this.words[term]
    }
    removeWord(term:string){
        if(this.words[term]){
            delete this.words[`${term}`]
            console.log("> complete")
        }else{
            console.log("> fail")
        }
    }

}

class Word{
    constructor(
        public term: string,
        public def: string
    ){}
    printWord(){
        console.log(`${this.term}: ${this.def}`)
    }
    updateDef(def: string){
        this.def = def
    }
    // addDef() 만들면 과제 끝
}

const tomato = new Word("tomato", "토마토");

const dict = new Dict()
dict.add(tomato);
dict.findDef("tomato");
dict.printWords()

tomato.updateDef("토마토마토")
tomato.printWord()

dict.updateDef(tomato)
dict.printWords()
dict.removeWord("tomato")
dict.removeWord("tomato")
dict.printWords()