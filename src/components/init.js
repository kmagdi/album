
export default function init(nr){
    let id=0
    const cards=[]
    for(let i=0;i<nr*nr/2;i++){
        let j=Math.floor(Math.random() * 60)+1; 
        cards.push(`https://raw.githubusercontent.com/kmagdi/pers/main/${j}.jpg`) 
        //cards.push(`https://picsum.photos/200?random=${i}`)
    }
    const cardsDupla=cards.reduce((acc,type)=>{
        acc.push({id:id++,type})
        acc.push({id:id++,type})
        return acc
        },[])
    cardsDupla.sort(() => Math.random() - 0.5);
    console.log("a tomb hossza:"+cardsDupla.length)
return cardsDupla
}
