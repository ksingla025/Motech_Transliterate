/**
* Author : Karan Singla
**/
var telugu = new Array();
telugu = {'n:':'ం','h:':'ః','a':'అ','aa':'ఆ','i':'ఇ','ii':'ఈ','u':'ఉ','uu':'ఊ','rx':'ఋ','lx':'ఌ','e':'ఎ','ei':'ఏ','ai':'ఐ','o':'ఒ','oo':'ఓ','au':'ఔ','k':'క','kh':'ఖ','g':'గ','gh':'ఘ','ng~':'ఙ','ch':'చ','chh':'ఛ','j':'జ','jh':'ఝ','nj~':'ఞ','t:':'ట','t:h':'ఠ','d:':'డ','d:h':'ఢ','nd~':'ణ','t':'త','th':'థ','d':'ద','dh':'ధ','n':'న','p':'ప','ph':'ఫ','b':'బ','bh':'భ','m':'మ','y':'య','r':'ర','r:':'ఱ','l':'ల','l:':'ళ','v':'వ','sh':'శ','shh':'ష','s':'స','h':'హ','c':'క','f':'ఫ','q':'క','w':'వ','x':'జ','z':'జ','aa1':'ా','i1':'ి','ii1':'ీ','u1':'ు','uu1':'ూ','rx1':'ృ','rxx1':'ౄ','e1':'ె','ei1':'ే','ai1':'ై','o1':'ొ','oo1':'ో','au1':'ౌ','ha1':'్','.':'.',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',';':';','-':'-','\\':'\\','<':'<','>':'>','/':'/','[':'[',']':']','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|'};

var hindi = new Array();
//hindi = {'n:':'ं',':':'ः','m:':'ँ','a':'अ','aa':'आ','i':'इ','ii':'ई','u':'उ','uu':'ऊ','rx':'ऋ','lx':'ऌ','e':'ए','ei':'ए','ai':'ऐ','o':'ओ','oo':'ओ','au':'औ','k':'क','kh':'ख','g':'ग','gh':'घ','ng~':'ङ','ch':'च','chh':'छ','j':'ज','jh':'झ','nj~':'ञ','t:':'ट','t:h':'ठ','d:':'ड','d:h':'ढ','nd~':'ण','t':'त','th':'थ','d':'द','dh':'ध','n':'न','p':'प','ph':'फ','b':'ब','bh':'भ','m':'म','y':'य','r':'र','r:':'ऱ','l':'ल','l:':'ळ','v':'व','sh':'श','shh':'ष','s':'स','h':'ह','c':'क','f':'फ','q':'क','w':'व','x':'ज','z':'ज','aa1':'ा','i1':'ि','ii1':'ी','u1':'ु','uu1':'ू','rx1':'ृ','rxx1':'ॄ','e1':'े','ei1':'े','ai1':'ै','o1':'ो','oo1':'ो','au1':'ौ','ha1':'्','om:':'ॐ','.':'.',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',';':';','-':'-','\\':'\\','<':'<','>':'>','/':'/','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|'}
hindi = {'n~':'ँ','n:':'ं','h:':'ः','m:':'ँ','a^':'अ','a':'अ','aa':'आ','i':'इ','ii':'ई','u':'उ','uu':'ऊ','rx':'ऋ','rx~':'ॠ','lx':'ऌ','lx~':'ॣ.','e~':'ऍ','e':'ए','ei':'ए','ai':'ऐ','o~':'ऑ','o':'ओ','oo':'ओ','au':'औ','k':'क','k~':'क़','kh':'ख','kh~':'ख़','g':'ग','g~':'ग़','gh':'घ','ng~':'ङ','ch':'च','chh':'छ','j':'ज','j~':'ज़','jh':'झ','nj~':'ञ','t:':'ट','t:h':'ठ','d:':'ड','d~':'ड़','d:h':'ढ','dh~':'ढ़','nd~':'ण','t':'त','th':'थ','d':'द','dh':'ध','n':'न','n!':'ऩ','p':'प','ph~':'फ़','ph':'फ','b':'ब','bh':'भ','m':'म','y':'य','y~':'य़','r~':'॰','r':'र','r:':'ऱ','l':'ल','l~':'ऴ','l:':'ळ','v':'व','sh':'श','shh':'ष','s':'स','h':'ह','c':'क','f':'फ','q':'क','w':'व','x':'ज','z':'ज','aa1':'ा','i1':'ि','ii1':'ी','u1':'ु','uu1':'ू','rx1':'ृ','rx~1':'ॄ','rxx1':'ॄ','e~1':'ॅ','e1':'े','ei1':'े','ai1':'ै','o~1':'ॉ','o1':'ो','oo1':'ो','au1':'ौ','ha1':'्','om:':'ॐ','v4':'॑','v5':'॒','v6':'॓','v7':'॔','v11':'्','v1':'़','v10':'ऽ','.':'.',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',';':';','-':'-','\\':'\\','<':'<','>':'>','/':'/','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|'};

var malayali = new Array();
malayali = {'n:':'ം','h:':'ഃ','a':'അ','aa':'ആ','i':'ഇ','ii':'ഈ','u':'ഉ','uu':'ഊ','rx':'ഋ','lx':'ഌ','e':'എ','ei':'ഏ','ai':'ഐ','o':'ഒ','oo':'ഓ','au':'ഔ','k':'ക','kh':'ഖ','g':'ഗ','gh':'ഘ','ng~':'ങ','ch':'ച','chh':'ഛ','j':'ജ','jh':'ഝ','nj~':'ഞ','t:':'ട','t:h':'ഠ','d:':'ഡ','d:h':'ഢ','nd~':'ണ','t':'ത','th':'ഥ','d':'ദ','dh':'ധ','n':'ന','p':'പ','ph':'ഫ','b':'ബ','bh':'ഭ','m':'മ','y':'യ','r':'ര','r:':'റ','l':'ല','l:':'ള','zh':'ഴ','v':'വ','sh':'ശ','shh':'ഷ','s':'സ','h':'ഹ','c':'ക','f':'ഫ','q':'ക','w':'വ','x':'ജ','z':'ജ','aa1':'ാ','i1':'ി','ii1':'ീ','u1':'ു','uu1':'ൂ','rx1':'ൃ','rxx1':'ൠ','e1':'െ','ei1':'േ','ai1':'ൈ','o1':'ൊ','oo1':'ോ','au1':'ൌ','ha1':'്','.':'.',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',';':';','-':'-','\\':'\\','<':'<','>':'>','/':'/','[':'[',']':']','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|'};

var bengali = new Array();
bengali = {'n-':' ঁ','n:':'ং','h:':'ঃ','a':'অ','aa':'আ','i':'ই','ii':'ঈ','u':'উ','uu':'ঊ','rx':'ঋ','lx':'ঌ','e':'এ','ei':'এ','ai':'ঐ','o':'ও','oo':'ও','au':'ঔ','k':'ক','kh':'খ','g':'গ','gh':'ঘ','ng~':'ঙ','ch':'চ','chh':'ছ','j':'জ','jh':'ঝ','nj~':'ঞ','t:':'ট','t:h':'ঠ','d:':'ড','d:h':'ঢ','nd~':'ণ','t':'ত','th':'থ','d':'দ','dh':'ধ','n':'ন','p':'প','ph':'ফ','b':'ব','bh':'ভ','m':'ম','y':'য','r':'র','l':'ল','v':'ব','sh':'শ','shh':'ষ','s':'স','h':'হ','c':'ক','f':'ফ','q':'ক','w':'ব','x':'জ','z':'জ','aa1':'া','i1':'ি','ii1':'ী','u1':'ু','uu1':'ূ','rx1':'ৃ','rxx1':'ৄ','e1':'ে','ei1':'ে','ai1':'ৈ','o1':'ো','oo1':'ো','au1':'ৌ','ha1':'্','.':'.',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','[':'[',']':']','/':'/','<':'<','>':'>','-':'-',';':';','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|','t~':'ৎ'};

var tamil = new Array();
tamil = {'﻿n:':'ந','h:':'ஃ','a':'அ','aa':'ஆ','i':'இ','ii':'ஈ','u':'உ','uu':'ஊ','e':'எ','ei':'ஏ','ai':'ஐ','o':'ஒ','oo':'ஓ','au':'ஔ','k':'க','kh':'க','g':'க','gh':'க','ng~':'ங','ch':'ச','chh':'ச','j':'ஜ','jh':'ஜ','nj~':'ஞ','t:':'ட','t:h':'ட','d:':'ட','d:h':'ட','nd~':'ண','t':'த','th':'த','d':'த','dh':'த','n':'ன','n~':'ந','p':'ப','ph':'ப','b':'ப','bh':'ப','m':'ம','y':'ய','r':'ர','r:':'ற','l':'ல','l:':'ள','zh':'ழ','v':'வ','sh':'ஷ','shh':'ஷ','s':'ஸ','h':'ஹ','c':'க','f':'ஃ','q':'க','w':'வ','x':'ஜ','z':'ஜ','aa1':'ா','i1':'ி','ii1':'ீ','u1':'ு','uu1':'ூ','e1':'ெ','ei1':'ே','ai1':'ை','o1':'ொ','oo1':'ோ','au1':'ௌ','ha1':'்','.':'.',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','[':'[',']':']','/':'/','<':'<','>':'>','-':'-',';':';','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|'};

var assamese = new Array();
assamese = {'n:':'ং','h:':'ঃ','a':'অ','aa':'আ','i':'ই','ii':'ঈ','u':'উ','uu':'ঊ','rx':'ঋ','lx':'ঌ','e':'এ','ei':'এ','ai':'ঐ','o':'ও','oo':'ও','au':'ঔ','k':'ক','kh':'খ','g':'গ','gh':'ঘ','ng~':'ঙ','ch':'চ','chh':'ছ','j':'জ','jh':'ঝ','nj~':'ঞ','t:':'ট','t:h':'ঠ','d:':'ড','d:h':'ঢ','nd~':'ণ','t':'ত','th':'থ','d':'দ','dh':'ধ','n':'ন','p':'প','ph':'ফ','b':'ব','bh':'ভ','m':'ম','y':'য','r':'ৰ','l':'ল','v':'ৱ','sh':'শ','shh':'ষ','s':'স','h':'হ','c':'ক','f':'ফ','q':'ক','w':'ৱ','x':'জ','z':'জ','aa1':'া','i1':'ি','ii1':'ী','u1':'ু','uu1':'ূ','rx1':'ৃ','rxx1':'ৄ','e1':'ে','ei1':'ে','ai1':'ৈ','o1':'ো','oo1':'ো','au1':'ৌ','ha1':'্','.':'.',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','[':'[',']':']','/':'/','<':'<','>':'>','-':'-',';':';','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|'};

var kannada = new Array();
kannada = {'n:':'ಂ','h:':'ಃ','a':'ಅ','aa':'ಆ','i':'ಇ','ii':'ಈ','u':'ಉ','uu':'ಊ','rx':'ಋ','lx':'ಌ','e':'ಎ','ei':'ಏ','ai':'ಐ','o':'ಒ','oo':'ಓ','au':'ಔ','k':'ಕ','kh':'ಖ','g':'ಗ','gh':'ಘ','ng~':'ಙ','ch':'ಚ','chh':'ಛ','j':'ಜ','jh':'ಝ','nj~':'ಞ','t:':'ಟ','t:h':'ಠ','d:':'ಡ','d:h':'ಢ','nd~':'ಣ','t':'ತ','th':'ಥ','d':'ದ','dh':'ಧ','n':'ನ','p':'ಪ','ph':'ಫ','b':'ಬ','bh':'ಭ','m':'ಮ','y':'ಯ','r':'ರ','r:':'ಱ','l':'ಲ','l:':'ಳ','v':'ವ','sh':'ಶ','shh':'ಷ','s':'ಸ','h':'ಹ','c':'ಕ','f':'ಫ','q':'ಕ','w':'ವ','x':'ಜ','z':'ಜ','aa1':'ಾ','i1':'ಿ','ii1':'ೀ','u1':'ು','uu1':'ೂ','rx1':'ೃ','rxx1':'ೄ','e1':'ೆ','ei1':'ೇ','ai1':'ೈ','o1':'ೊ','oo1':'ೋ','au1':'ೌ','ha1':'್','.':'.',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',';':';','-':'-','\\':'\\','<':'<','>':'>','/':'/','[':'[',']':']','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|'};

var marathi= new Array();
marathi = {'n:':'ं','h:':'ः','m:':'ँ','a':'अ','aa':'आ','i':'इ','ii':'ई','u':'उ','uu':'ऊ','rx':'ऋ','lx':'ऌ','e':'ए','ei':'ए','ai':'ऐ','o':'ओ','oo':'ओ','au':'औ','k':'क','kh':'ख','g':'ग','gh':'घ','ng~':'ङ','ch':'च','chh':'छ','j':'ज','jh':'झ','nj~':'ञ','t:':'ट','t:h':'ठ','d:':'ड','d:h':'ढ','nd~':'ण','t':'त','th':'थ','d':'द','dh':'ध','n':'न','p':'प','ph':'फ','b':'ब','bh':'भ','m':'म','y':'य','r':'र','r:':'ऱ','l':'ल','l:':'ळ','v':'व','sh':'श','shh':'ष','s':'स','h':'ह','c':'क','f':'फ','q':'क','w':'व','x':'ज','z':'ज','aa1':'ा','i1':'ि','ii1':'ी','u1':'ु','uu1':'ू','rx1':'ृ','rxx1':'ॄ','e1':'े','ei1':'े','ai1':'ै','o1':'ो','oo1':'ो','au1':'ौ','ha1':'्','om':'ॐ','.':'.','|':'॥',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','[':'[',']':']','/':'/','<':'<','>':'>','-':'-',';':';','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|'};

var sanskrit = new Array();
sanskrit = {'n:':'ं','om:':'ॐ','vx':'॑','vxx':'॒','ox':'॓','h:':'ः','m:':'ँ','a':'अ','aa':'आ','i':'इ','ii':'ई','u':'उ','uu':'ऊ','rx':'ऋ','lx':'ऌ','e':'ए','ei':'ए','ai':'ऐ','o':'ओ','oo':'ओ','au':'औ','k':'क','kh':'ख','g':'ग','gh':'घ','ng~':'ङ','ch':'च','chh':'छ','j':'ज','jh':'झ','nj~':'ञ','t:':'ट','t:h':'ठ','d:':'ड','d:h':'ढ','nd~':'ण','t':'त','th':'थ','d':'द','dh':'ध','n':'न','p':'प','ph':'फ','b':'ब','bh':'भ','m':'म','y':'य','r':'र','r:':'ऱ','l':'ल','l:':'ळ','v':'व','sh':'श','shh':'ष','s':'स','h':'ह','c':'क','f':'फ','q':'क','w':'व','x':'ज','z':'ज','aa1':'ा','i1':'ि','ii1':'ी','u1':'ु','uu1':'ू','rx1':'ृ','rxx1':'ॄ','e1':'े','ei1':'े','ai1':'ै','o1':'ो','oo1':'ो','au1':'ौ','ha1':'्','om':'ॐ','.':'.','|':'॥',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','[':'[',']':']','/':'/','<':'<','>':'>','-':'-',';':';','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|'};

var oriya = new Array();
oriya = {'n:':'ଂ','h:':'ଃ','m:':'ଁ','a':'ଅ','aa':'ଆ','i':'ଇ','ii':'ଈ','u':'ଉ','uu':'ଊ','rx':'ଋ','lx':'ଌ','rxx':'ୠ','lxx':'ୡ','e':'ଏ','ei':'ଏ','ai':'ଐ','o':'ଓ','oo':'ଓ','au':'ଔ','k':'କ','kh':'ଖ','g':'ଗ','gh':'ଘ','ng~':'ଙ','ch':'ଚ','chh':'ଛ','j':'ଜ','jh':'ଝ','nj~':'ଞ','t:':'ଟ','t:h':'ଠ','d:':'ଡ','d:h':'ଢ','nd~':'ଣ','t':'ତ','th':'ଥ','d':'ଦ','dh':'ଧ','n':'ନ','p':'ପ','ph':'ଫ','b':'ବ','bh':'ଭ','m':'ମ','y':'ଯ','r':'ର','l':'ଲ','l:':'ଳ','v':'ଵ','sh':'ଶ','shh':'ଷ','s':'ସ','h':'ହ','c':'କ','f':'ଫ','q':'କ','w':'ଵ','x':'ଜ','aa1':'ା','i1':'ି','ii1':'ୀ','u1':'ୁ','uu1':'ୂ','rx1':'ୃ','rxx1':'ॄ','e1':'େ','ei1':'େ','ai1':'ୈ','o1':'ୋ','oo1':'ୋ','au1':'ୌ','ha1':'୍', '.':'.','|':'॥',',':',','?':'?','0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9','[':'[',']':']','/':'/','<':'<','>':'>','-':'-',';':';','!':'!','@':'@','#':'#','$':'$','%':'%','^':'^','&':'&','*':'*','(':'(',')':')','_':'_','+':'+','|':'|'};


vListArr = new Array("a","aa","i","ii","u","uu","rx","rx~","lx","lx~","e","ei","ai","o","oo","au");
myhash = { 
a : A=new Array("aa","ai","au","a!","a"),
b : B=new Array("bh","b"),
c : C=new Array("chh","ch","c"),
d : D=new Array("d:h","dh~","d~","dh","d:","d"),
e : E=new Array("ei","e~", "e"),
f : F=new Array("f"),
g : G=new Array("gh","g~","g"),
h : H=new Array("h:","h"),
i : I=new Array("ii","i"),
j : J=new Array("jh","j~","j"),
k : K=new Array("kh","kh~","k~","k"),
l : L=new Array("lx~","lx","l:","l~","l"),
m : M=new Array("m:","m"),
n : N=new Array("ng~","nd~","nj~","n:","n~","n!","n","n-"),
o : O=new Array("ox","oo","om:","o~", "o"),
p : P=new Array("ph~","ph","p"),
q : Q=new Array("qs~","q"),    				
r : R=new Array("rx~","rx","r~","r:","r"), 		

s : S=new Array("shh","sh","s"),
t : T=new Array("t:h","th","t:","t"),
u : U=new Array("uu","u"),
v : V=new Array("vxx", "v21","v10","v7","v6","v5","v4","v1","vx","v"),
w : W=new Array("w"),
x : X=new Array("x"),
y : Y=new Array("y~","y"),
z : Z=new Array("zz","zh","z"),
':' : der=new Array (":"), 
'.' : E1=new Array("."),
',' : E2=new Array(","),
'?' : E3=new Array("?"),
'"' : E4=new Array("\""),
1 : N1=new Array("1"),
2 : N2=new Array("2"),
3 : N3=new Array("3"),
4 : N4=new Array("4"),
5 : N5=new Array("5"),
6 : N6=new Array("6"),
7 : N7=new Array("7"),
8 : N8=new Array("8"),
9 : N9=new Array("9"),
0 : N10=new Array("0")
};
//


//*********  GLOBAL DECLARATIONS  *********  

//var _hn  = 'n:'
var _hn = "(n\\\~|n\\\:|h\\\:|v10|v21|vx|vxx|ox|r\\\~)";
var schwa = "a";
var schwC;
var hal = "ha1";
var spc = "spc";
var newl = "new";
var spc =" ";
var _new = "";
//var schr = "n: n~ : v10 r~ , . ? ~ [ ] < > ; / \\ : 0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ + |"
var schr = "n: h: n~ : vx vxx ox v10 r~ , . ? ~ [ ] < > ; / \\ 0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ + |";
//var schr = "n: n~ : v10 r~ , . ? ~ [ ] < > ; / \\ : 0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ + |"
var spSchr = "(\,|\.|\?|\[|\]|\<|\>|\;|\/|\\\\|0|1|2|3|4|5|6|7|8|9|\!|\@|\#|\$|\%|\^|\&|\\\*|\\\(|\\\)|\\\+|\\\_|\\\|)";
var sList = schr.split(/\s/g);
var vList = 'a aa i ii u uu rx rx~ lx lx~ e e~ e: ei ai o o~ o: oo au';
var _vls = vList.split(/\s/g);
var _nV = _vls.length;
spw = Get_Words(schr);

var wordHash = {};

var _sph = new Array();
for (var k = 0; k <= spw.length; k++)
	_sph[spw[k]] = 1;

extr = "";
var uniText;

var tLang = new Array();


var s ="" ;   			//intialization for the chngLang()
var myLine = "";
var angFlag = 0;
var passLen= 0;

//**********  DECLARATION ENDS  *******  -->



//********  Primary function  ********

function sendVal()
{
	var wrd = "kuch";
	wrd = wrd.toLowerCase()				//converting the input to LOWER-CASE
	NewParse(wrd)
}



function NewParse(name)
{
	var uni="";
	var hArray = new Array();
	var tL = new Array();
	var engFlag = 0; //used to display the english characters as it is
	 

   hArray = GetLines(name);
	passLen= hArray.length;

	var myLine1 = round(myLine);

	if(hArray.length <= 23)			//23 is the no. of lines that are visible in the input and output boxes
		tL = hArray;
	else{
		var curPos = myLine1;
		var v = curPos-23;
		if(v <= 0){
		  v = 0;
		}
		for(var u=0; u < 23; u++){
		   if(v < hArray.length)
	   		   tL[u] = hArray[v];
		   
		  v++;
		}
	    }



	for(var k=0;k<tL.length;k++)
	{
		var ml = tL[k];
		//var ml1 = IT3toIT4(ml)
		var mw = Get_Words(ml);
		
		for (var z = 0; z < mw.length; z++) 	
		{
			if(mw[z].match("<") && mw[z].match(">")) //if the word is enclosed with in <>, the word is retured without conversion by excluding <>
			{
				mw[z] = mw[z].replace(/^</,'');
				mw[z] = mw[z].replace(/>$/,'');
				uni = uni + mw[z];
				uni = uni + " ";
				continue;
			}

			if(mw[z].match("<")) //if the word is started with <, then engFlag is set 1. Means it doesn't do any move conversion
			{
				engFlag = 1;
				mw[z] = mw[z].replace(/^</,'');
			}
			if(mw[z].match(">")) //ro reset the engFlag
			{
				engFlag = 0;
				mw[z] = mw[z].replace(/>$/,'');
				uni = uni + mw[z];
				uni = uni + " ";
				continue;
			}

			if(engFlag == 1)
			{
				uW = mw[z];
			}
			else if(mw[z] != null && mw[z] != "")
			{
				var spStart = "";
				var spEnd = "";
				var arr;
				
				spStart = mw[z].match(/^\W+/); //storing the special characters in to the variable which are there in the beginning
				mw[z] = mw[z].replace(/^\W+/, "");

				if(tLang == hindi)
				{
					arr = mw[z].match(/(\,|\.|\?|\[|\]|\<|\>|\;|\/|\\|0|1|2|3|4|5|6|7|8|9|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\||\")+$/);
					mw[z] = mw[z].replace(/(\,|\.|\?|\[|\]|\<|\>|\;|\/|\\|0|1|2|3|4|5|6|7|8|9|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\||\")+$/, "");  //storing the special characters in to the variable which are there in the ending					
				}
				else
				{
					arr = mw[z].match(/(\,|\.|\?|\[|\]|\<|\>|\;|\/|\\|0|1|2|3|4|5|6|7|8|9|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\||\")+$/);
					mw[z] = mw[z].replace(/(\,|\.|\?|\[|\]|\<|\>|\;|\/|\\|0|1|2|3|4|5|6|7|8|9|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\||\")+$/, "");  //storing the special characters in to the variable which are there in the ending					
				}

				if(arr != null)  //search returns the array for example var name ="raghu"; name = name.match(/(gh)/) returns "gh", "h". So, to avoid this following steps are used
				{
					spEnd = arr[0];
				}

				if(mw[z] != "")
				{
					mw[z] = IT3toIT4(mw[z]);
					uW = Trans(mw[z]);

					if(spStart != null && spStart != "" && spEnd != null && spEnd != "")
					{
						uW = spStart + uW + spEnd;
					}
					else if(spStart != null && spStart != "")
					{
						uW = spStart + uW;
					}
					else if(spEnd != null && spEnd != "")
					{
						uW = uW + spEnd;
					}
				}
				else
				{
					if(spStart != null && spStart != "" && spEnd != null && spEnd != "")
					{
						uW = spStart + spEnd;
					}
					else if(spStart != null && spStart != "")
					{
						uW = spStart;
					}
					else if(spEnd != null && spEnd != "")
					{
						uW = spEnd;
					}
				}
			}
			else
			{
				uW = "";
			}

	 		uni = uni +uW;			
			if(spc != null)
			{
				uni = uni + spc;	//including spaces in between words
			}
		}
		uni = uni + "\n";
		//if(_new != null)//including the new line  character
		//{
	     	//uni = uni +_new
	
  		//}
	}

}


function Trans(mw)		//all the main operations are performed in this function
{
	{
		uniText="";
		psyl = new Array();
		psyl = syllibify(mw);
 		for(var i=0;i<psyl.length;i++)		
		{
			var halF = 0;
			var phs = phonify(psyl[i]);
			var vpos = vowPos(phs);
		   	if (vpos > 0) 
			{
				var spChar = 0;
				for(var e=0; e<sList.length;e++)
				{
					if(phs[vpos-1] == sList[e])
					spChar = 1;
				}
				if (phs[vpos] == schwa) 							
			   	{
					if(spChar == 0)
					{
						phs[vpos] = "" ;
					}
				}
			   	 else 
			    	{
					if(spChar == 0)
					{
						phs[vpos] = phs[vpos] + "1";
					}
                				}
				if (vpos == 1) 
				{ 	      
					if (vpos != phs.length-1) 
					{
						halF = 1;
					}
				}
			    	else 
			    	{
					halF = 1;
				}
		  	}
			else if (vpos < 0) 
			{
				halF = 2;
			}
			else 
			{
				halF = 3;
			}
		  

//************  WRITING THE OUT/PUT  ***************************
			//document.box.help.value = phs + " " + phs.length + " " + vpos;

			if (halF == 1) 
			{ 
				for (var f = 0; f <= vpos - 2; f++) 
				{
					if(tLang[phs[f]] != null)
					{
						uniText = uniText + tLang[phs[f]];
					}
					if(tLang[hal] != null)
					{
						var spChar = 0;
						for(var e=0; e<sList.length;e++)
						{
							if(tLang[phs[f]] == sList[e])
							spChar = 1;
						}
						
						if(spChar == 0)
						{
							uniText = uniText + tLang[hal];
						}
					}
					if (vpos - 2 - f > 0) 
					{
						if(extr != null)
						{
							uniText = uniText + extr;
						}
					}
				}
				for (var f = vpos - 1; f <= vpos ; f++)
				{
					if(tLang[phs[f]] != null)
					{
						uniText = uniText + tLang[phs[f]];
					}
				}
				for (var f = vpos + 1; f < phs.length; f++) 
				{
					if(tLang[phs[f]] != null)
					{
						uniText = uniText + tLang[phs[f]];
					}
					var alw = IsAllowed(phs[f])
					if (alw == 0)
					{
					if(tLang[hal] != null)
					{
						uniText = uniText + tLang[hal];
					}
				}
				if (phs.length - 1 - f >=2 )
				{
					if(extr != null) 
					{
						uniText = uniText + extr;
					}
				}	      
			}
		} 
		else if (halF == 3) 
		{ 
			if(tLang[phs[0]] != null)
			{
				uniText = uniText + tLang[phs[0]];
			}
		    for (var f = 1; f < phs.length; f++) 
		    {
				if(tLang[phs[f]] != null)		      
				{
					uniText = uniText + tLang[phs[f]];
				}
				var alw = IsAllowed(phs[f]);
				if (alw == 0)
				{
					if(tLang[hal] != null)
					{
						var spChar = 0;
						for(var e=0; e<sList.length;e++)
						{
							if(tLang[phs[f]] == sList[e])
							//document.box.help.value = sList[e];
							spChar = 1;
						}
						
						if(spChar == 0)
						{
							uniText = uniText + tLang[hal];
						}
					}
				}
				if (phs.length - 1 - f >=2 ) 
				{
					if(tLang[extr] != null)
					{
				 		uniText = uniText + tLang[extr];
					}
				}	      
		    }
		}
  		else if (halF == 2) 
		{
			for (var f = 0; f < phs.length; f++) 
			{
				if(tLang[phs[f]] != null)		    
				{
			  		uniText = uniText + tLang[phs[f]];
				}
				var alw = IsAllowed(phs[f]);

				if (alw == 0)
				{
					if(tLang[hal] != null)
					{
						var spChar = 0;
						for(var e=0; e<sList.length;e++)
						{
							if(tLang[phs[f]] == sList[e])
							{
								spChar = 1;
							}
						}
						
						if(spChar == 0)
						{
							uniText = uniText + tLang[hal];
							//alert(uniText);
						}
					}
				}
			}
		}
		else if (halF == 0) 
		{
			for (var f = 0; f < phs.length; f++) 
		    {
				if(tLang[phs[f]] != null)
				{
			  		uniText = uniText + tLang[phs[f]];
				}
		    }  
		}	  
	}
}
 return uniText;
}


function syllibify(nam)	
{
var eW = nam;
var phones = phonify(eW);
var nv_pr  = GetNVowels(phones);
var psyl = new Array();
psyl = syllibify_int(phones, nv_pr);
return psyl;
}

function GetNVowels(arr)
{
   //var list = arr.split(/\s/g);
   list = arr;
   var len = list.length;
   var nv_pr1 = 0;
   var i;
   
   for (i = 0; i < len; i++)
   {
      var lph = list[i];

      if (IsVowel(lph))
      {
         nv_pr1++;
      }
   }
   return nv_pr1;

}

function IsVowel(vowel)
{

   var tPh = vowel;
   var f = 0;
   var j;
   for (j = 0; j < _nV; j++)
   {
      if (tPh == _vls[j])
      {
         f = 1;
	 //print "vowel is $tPh \n";
	 break;
      }
   }
   return f;
}


function phonify(ipstr)														
{
  var gastr = new String(ipstr);

   var gstr= new Array(gastr.length);  
  for(i=0;i<gastr.length;i++){
   gstr[i]=gastr.charAt(i);
  }

   newHash= changeHash();
   arr_index=0;
   oldValue="";
   converted="";
   end_arr=new Array();
   var strlen = gstr.length;
   for(var ti=0;ti<strlen;ti++)
      {
       newValue = oldValue;
	   newValue=newValue+gstr[ti];
	    if(newHash[newValue])
		  {
	       	oldValue=newValue;
		  }
		  else if((ti+1)<strlen && newHash[newValue+gstr[ti+1]] )
		  {
		       oldValue=newValue+gstr[ti+1];
		       ti++;
		  }
	  else{
	       converted=converted+newHash[oldValue];
		var str = "Hello" + oldValue + "boy";
		if(oldValue != "")
		{
		 	 end_arr[arr_index]=oldValue;
			arr_index++	;	  	 
		}		
	   	oldValue=gstr[ti];
	      }
       }
   end_arr[arr_index]=oldValue;
   for(var i=0; i<end_arr.length; i++)
	{
	   if(end_arr[i] == "ai" && end_arr[i+1] == "i")
		{
		   end_arr[i] = "a";
		   end_arr[i+1] = "ii";
		}
	}
 //alert(end_arr);
   return end_arr;
}


function changeHash()				//support function for phonify
{
  newHash={};
  for (var key in myhash){
     for (var eachChaSet in myhash[key]){
	      newHash[myhash[key][eachChaSet]]=key;
	     }	    
    }
  return newHash;
}

function vowCnt(varr1)														
{
	var vArr1 = new String(varr1);
    var vArr = new Array(vArr1.length)
	for(je=0;je<vArr1.length;je++)
		vArr[je]=vArr1.charAt(je);
	   
	
	vCnt=0;
	for(var ij=0;ij<vArr.length;ij++){
		for(var p=0;p<vListArr.length;p++){
			if(vArr[ij] == vListArr[p]) vCnt++;
			}
		}
                   
	return vCnt;
}

function syllibify_int(phones, nvpr)
{
   
   ph = phones;
   nv_pr = nvpr;
   var nPh = ph.length;
   var syl = new Array();
   sI = 0;
   nv_vis = 0;
   syl[sI]  = ph[0];
	//var vHelp = "";	 
   vHelp = ph[0];
   
   cPh = ph[0];
	  
   if (IsVowel(cPh))
   {
      	nv_vis++;
   }
   var i;
   for (i = 1; i < nPh; i++) {

		if (ph[i] == "#")
        {
          continue;
        }

        if (i + 1  == nPh && !(IsVowel(ph[i])))
        {
           syl[sI] = syl[sI] + ph[i];
			//vHelp = vHelp + " "+ ph[i];
   			sI++;
          	continue;
        }
		var rE = new RegExp(_hn);
       // if (ph[i] == _hn)
		if(ph[i].match(rE))
        {
          syl[sI] = syl[sI] + ph[i];
			  //vHelp = vHelp + ph[i] + " Good";
          continue;
        }

        tPh = ph[i - 1];
        cPh = ph[i];

        if (IsVowel(cPh))
        {
        	nv_vis++;
        }

        if ( (IsVowel(tPh)) && (IsVowel(cPh)) )
        {
          sI++;
          syl[sI] = ph[i];
			  vHelp = ph[i] + " ";
          continue;
        }

        //if ( ((IsVowel(tPh)) || (ph[i - 1] == _hn)) && (nv_vis < nv_pr))
		if ( ((IsVowel(tPh)) || ph[i - 1].match(rE)) && (nv_vis < nv_pr))
        {
           sI++;
           syl[sI] = ph[i];
			   //vHelp = ph[i] + " ";
        }
        else
        {
          syl[sI] = syl[sI] + ph[i];
			  //vHelp = vHelp + ph[i] + " ";
        }

      }
   return syl;
}


function GetLines(lines)
{
	return lines.split(/\n/);
}

function vowPos(gWord)
{
//  for(var i = 0;i<gWord.length;i++)
//  	if(vowCnt(gWord[i])) 
//  		return i

  var arr = gWord; //@{ar};
  var vpos = -1;
  var y;

  for (y = 0; y <= arr.length; y++) {
     if (IsVowel(arr[y])) {
        vpos = y;
	break;
     }
 }
 return vpos;
}

function IT3toIT4(gW)
{
   gW = gW.replace(/[\']/g,':');
   gW = gW.replace(/[\-]/g,'~');
   gW = gW.replace(/[\?]/g,'');
   if(tLang == oriya) //there is some problem with phone 'v'. So, 'v' is replaced with 'z'.
   {
	   gW = gW.replace(/v/g,'b');
   }
   return gW;
}

function IsAllowed(p)
{
   var t = p;
   var r = 0;
   if (_sph[t])
	      r = 1;
   return (r);
}

function Get_Words(line)
{
  var lne = line;
  lne = Make_SingleSpace(lne);
  var word1 = lne.split(/ /g);
  return word1;
}

function Make_SingleSpace(ln)
{
   ln = ln.replace(/\s+$/g,'');
   ln = ln.replace(/^\s+/g,'');
   ln = ln.replace(/\t+/g,' ');
   ln = ln.replace(/\s+/g,' ');
   return ln;
}

function chngLang(language)
{
	s = language;
	
	_hn = "(h\\\:|n\\\:)";
	vList = 'a aa i ii u uu rx rx~ lx lx~ e e: ei ai o o: oo au';
	schr = "n: vx vxx ox h: : , . ? ~ [ ] < > ; / \\ 0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ + |";
	sList = schr.split(/\s/g);
	spw = Get_Words(schr);
	_sph = new Array();
	
	for (var k = 0; k <= spw.length; k++)
		_sph[spw[k]] = 1;

	if(s == "telugu")
	{
		tLang = telugu;	
	}
	else if(s == "hindi")
	{
		tLang = hindi;
		_hn = "(n\\\~|h\\\:|n\\\:|v10|v21|r\\\~)";
		vList = 'a aa i ii u uu rx rx~ lx lx~ e e~ e: ei ai o o~ o: oo au';
		schr = "n: vx vxx ox h: : n~ v10 r~ , . ? ~ [ ] < > ; / \\ 0 1 2 3 4 5 6 7 8 9 ! @ # $ % ^ & * ( ) _ + |";
		sList = schr.split(/\s/g);
		spw = Get_Words(schr);
		
		_sph = new Array();

		for (var k = 0; k <= spw.length; k++)
			_sph[spw[k]] = 1;
	}
	else if(s == "tamil")
	{
		tLang = tamil;
		//_hn = "(n\\\:|\\\:|v10|v21|r\\\~)";
		_hn = "(n\\\:|h\\\:|v10|v21|r\\\~)";
	}
	else if(s == "sanskrit")
	{
		tLang = sanskrit;
	}
	else if(s == "kannada")
	{
		tLang = kannada;
	}
	else if(s == "assamese")
	{
		tLang = assamese;
	}
	else if(s == "marathi")
	{
		tLang = marathi;
	}
	else if(s == "malayali")
	{
		tLang = malayali;
	}
	else if(s == "bengali")
	{
		tLang = bengali;
	}
	else if(s == "oriya")
	{
		tLang = oriya;;
	}
}

function LangDefault()
{
tLang = hindi;
}

function round(n) {			//to round off
    var s = "" + Math.round(n * 100) / 100;
    var i = s.indexOf('.');
    if (i < 0)
      return s;
    var t = s.substring(0, i);
    return t;
  }

function noTrans(myStr)
{

 if (myStr.match("<"))
	{
	angFlag = 1;
	return 1;
	}
 if (myStr.match(">"))
	{
	angFlag = 0;
	return 1;
	}
 if (!(myStr.match(">")) || !(myStr.match("<")))
	{
	return 0;
	}
}

function Transliterate(sentence){
   var words = sentence.trim().split(/[ ,]+/);
   var output = "";

   for(var i =0;i<words.length;i++){
      output+= Trans(words[i])+" ";
   }
   return output;
}

LangDefault();



