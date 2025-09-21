export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO format
  tags: string[];
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "la-haine",
    title: "La Haine",
    date: "2025-08-31",
    tags: ["sinema"],
    content: `Gerçek bir hikâyeden alınmış ve gerçek bir hikâyeye adanmış bir film olan La Haine, 1986’da 500.000 öğrencinin katıldığı protestolarda polis tarafından kovalanan ve dövülerek öldürülen Malik Oussekine yani filmdeki adıyla Abdel Ichaha adlı karakterinin ölümünün etrafında şekillenen olaylar silsilesini anlatıyor. Bir silah patlamasıyla başlayan film, yine bir silah patlaması kadar gerçek ve vurucu bir sonla bitiyor. Genel olarak anlatısını kenar mahalle ve banliyö sosuyla sunan Mathieu Kassovitz bu film ile 1995 Cannes Film Festivali’nde en iyi yönetmen ödülünü de kazanmıştır.

### Filmden Bir Alıntı
50. _kattan düşen adamın hikayesini duymuş muydunuz? Düşerken kendini avutmak için hep “Buraya kadar her şey yolunda, buraya kadar her şey yolunda, buraya kadar her şey yolunda…” diye tekrar etmiş, fakat önemli olan nasıl düştüğün değil nasıl yere çarptığındır._

La Haine’de, Vinz, Said ve Hubert adında ayrı dinlere, renklere ve etnik kökene sahip üç arkadaşın, arkadaşları Abdel’in polis şiddeti sonucunda hastaneye kaldırılmasından sonraki 24 saatini izliyoruz. Film ırkçılık, sınıf farklılıkları, toplumun yozlaşması ve şiddet gibi bir sürü konuya dikkat çekiyor. Karakterlerimizi tanıtacak olursak Vinz aralarındaki en “kanı kaynayan”, hızlı ve yanlış kararlar alan bıçkın delikanlısı, Said daha orta yolcu ve sakin, Hubert ise olgunluğu ve sakinliği ile hikayemizin abisi. Karakterlerimiz kişilikleri de arka planları da aynı olmasa da buluştukları ortak nokta sınıf nefreti. Yaşadıkları koşullardan ve ortamdan memnun olmayan bu gençlerin yaşadığı en önemli duygu: Nefret. Karakterlerimiz bu duyguyu farklı şekilde yorumluyor ve kanalize etmeye çalışıyor. Vinz, bu nefreti şiddet ve intikam ile yaşamak istiyor ve arkadaşlarına şöyle diyor “Bu lanet sisteme katlanmaktan sıkıldım. Fare deliklerinde yaşıyoruz ve siz bunu değiştirmek için ne yapıyorsunuz? Eğer Abdel ölürse durumu eşitlemek için bir polisi öldüreceğim.” Bunun üzerine Hubert, “Okula gitseydin nefretin nefreti beslediğini öğrenirdin” diyerek karşı çıkıyor.

### Ne Görüyoruz?

Film boyunca gördüğü halüsinasyonlardan, hal ve hareketlerinden ve öfke problemlerinden anladığımız kadarıyla henüz kendi sorunlarını bile çözememiş Vinz, Abdel’in hastanede öldüğünü arkadaşlarıyla beraber televizyondan öğrenir, oturduğu yerden arkadaşlarına haber vermeden kalkıp ilk gördüğü polisin yanına gider ve onu öldürdüğünü hayal eder. O sırada Hubert ve Said yanına gelip ‘Gerizekalısın, biz bu işte yokuz!’ diyerek Vinz’in yanından ayrılır. Fransa’da o zamanlar hat safhada olan ırkçılığı gördüğümüz bir sonraki sahnede “dazlaklar” Hubert siyahi olduğu için Said ve Hubert’in önünü kesip dövmeye başlar. Bu sırada silahı ile bir dazlağı esir alan Vinz arkadaşlarını kurtarır ve dazlakları korkutup uzaklaştırır, film boyu Abdel ölürse bir polisi öldüreceğini söyleyen Vinz, yakaladığı dazlağın kafasına silah dayamışken tetiği çekmeye cesaret edemez. Film boyu şiddette başvurmamasını öğütleyen Hubert, Vinz’i o dazlağı öldürmesi konusunda ikna etmeye çalışır. Tetiği çekemeyeceğine ilk andan beri emin olan Hubert haklı çıkmıştır. Tam ayrıldıkları esnada film boyunca birkaç defa karşımıza çıkan Notre Dame ceketli polisle karşılaşırlar ve Mattiheu Kassovitz’in kendisine ödül kazandıran bu filmi çekmesinin nedeni olan final sahnesi ile tetiği yönetmen çeker.

#sinema #deneme #şahsi `,
  },
  {
    slug: "zeki-demirkubuz",
    title: "Zeki Demirkubuz",
    date: "2025-08-31",
    tags: ["sinema"],
    content: `Zeki Demirkubuz ve sineması hakkındaki genel görüşün aksine benim fikirlerim oldukça keskin olabilir. Bu paragrafta yazıyı özetleyip devamında örneklendireceğim. Kendisini basit bir nasist olarak tanımlamaktan öteye geçmeyi de gayet gereksiz buluyorum. Bu yazıyı yazmak için filmlerinin tamamını izlemiş olmayı bekleyemedim, birkaç eksiğim var fakat filmlerindeki tüm kadınların -bu kelimeyi kullanmaktan nefret etsem de kullanacağım, kusura bakmayın- “orospu” olmaktan öteye gidemediğini, daha kötüsü tüm erkeklerin de “mağdur aşık” rolünde olmaları da fevkalade korkunç bir durum. Şimdi burada bahsettiklerime aşağıda daha detaylı değineceğim.

Bütün kadın karakterlerin birbirinin aynısı olması konusu genel olarak kabul görmüş bir şey olsa da birkaç örnekle kendi yorumumu katmak isterim. “Bekleme Odası” filminde, “Kader” filmiyle veya “İtiraf” filminde gayet paralel karakterler görüyoruz, örneğin “Bekleme Odası”nın Ahmet’i de “Kader”in Bekir’i de ilişkisini bitirmeyi göze alacak kadar aşık, ve bunların bedellerini ödediklerini izliyoruz. Aynı şekilde Uğur ve Elif karakterleri de iki insana aynı anda ilgi duyuyorlar. Uğur ne Zagor’u hayatından çıkarabiliyor ne Bekir’i. Kerem’in anlattıklarına bakarsak Elif, Ahmet’e büyük bir obsesyona sahip buna karşın Kerem’le 4 yıldır birlikte olmasına rağmen Ahmet’le çalışmaya devam ediyor. Bu kararları almıyorlar “doğru” olanı yapmıyorlar çünkü Zeki Demirkubuz hepsinin kendi kafasında kurduğu “kötü kadın” kalıbından çıkmasına izin vermiyor. 

Bunu senaryoyu kafasında oluşturmaya başladığı anda yapıyor gibi adeta, hiçbir istisnası yok. Hatta inanır mısınız “İtiraf” filmindeki Nilgün de eşini aldatan dümdüz bir “kötü kadın” ve Harun da tek suçu sevmek olan mağdur bir erkek. Harun, yıllar geçmesine rağmen yüzüne karşı ağıza alınmayacak laflar söylediği eski eşinin evini bulup ziyarete gidecek kadar da “seviyor”. “Kader”deki Bekir, tanıdık geldi mi? Nilgün’ün aşık olup kaçtığı adam, sonrasında düştüğü sefalet ve çocuğuyla bir başına kalmasını Uğur’da da görmemiş miydik zaten? Bu örnekler böyle uzayıp gider. Değinmeye değer görmeyecek kadar kötü ve problematik olan, evinizden, işinizden, eşinizden ve çevrenizden uzak tutmanız gereken bir diğer film de, kendisinin sonuncu filmi olan “Hayat”. Gerçekten hatırlamaya uğramayacağım kadar kötü. O son neydi öyle be Zeki?

Zeki Demirkubuz’un kendisinde her cüretti gördüğünü kendi yönettiği, yazdığı, editörlüğünü yaptığı, sinematografisini yaptığı ve başrol oynadığı filmi olan “Bekleme Odası” filminde rahatça görebiliyoruz. Zeki kendisine hak vermemizi istiyor belli ki ama maalesef ben bu kadar empati yoksunu bir insan değilim. Bomboş duvarlara bakarak depresyonu resmetmeye çalıştığı, empati beklediği karakteri Ahmet muhtemelen kendi yaptığı filmler arasında en beğendiğidir. Yine çok aşık olan ve asla mutlu olamayan bir karakter bu Ahmet. Hüngür hüngür ağladıktan sonra neden bu kadar umrunda değilim diyen bir kadına karşı yüzüne dahi bakmadan konuşacak bir insan Ahmet. Evine girmeye çalışan hırsıza oyunculuk teklif edecek kadar da Rus Edebiyatı karakteri griliğinde aynı zamanda, esrarengiz. Yersen… Tam bir fark etmezci. Fark etmez çünkü ne önemi var ki? Siyahıyla da beyazıyla da bu hayat çok kötü, değil mi Zeki? Nedir tek önemli olan şey? Beşiktaş ve Türkiye futbolu.

Zeki Demirkubuz’un bizden beklediğinin kendisini resmettiği o “derin” karakterleri ile empati kurup, kendisini yüceltmemiz olduğu kesin. Fakat ben o tarz dinlemiyorum. Cümlelerimi basitleştirmeden bu zayıf karakterlerden bahsetmekte bile zorlanıyorum. Keza “Tamam kanka sensin” den öteye gidemiyor hiçbiri. Her filminde aynı karakterleri tekrarlayıp durması, onları farklı mekanlarda, farklı isimlerle ama aynı ruh halleriyle karşımıza çıkarması bir tesadüf değil. Demirkubuz, kendi zihnindeki aynada yansımasını görmek istiyor ve bunu defalarca yapmaktan bıkmıyor. Karakterleri ne gelişiyor ne değişiyor, çünkü zaten gelişim ya da değişimle ilgilenmiyor. Onun derdi, dünyaya kendi gözlerinden bakmamızı sağlamak, onun hissettiği yalnızlığı, çaresizliği, öfkeyi paylaşmamızı beklemek. Ama sorun şu ki, bu dünyada yalnızlığı ve çaresizliği hissetmenin binbir yolu var; oysa Demirkubuz’un karakterleri için yol tek: ya “orospu”sundur ya da “mağdur aşık”.

O karanlık sahneler, sigara dumanları, loş ışıklar ve bomboş sokaklar, resmedebildiğin en derin depresyon imgeleri bunlar mı gerçekten? Kendi hayatında hissettiği anlamsızlığı, varoluş sancılarını, boşluk duygusunu perdeye taşırken sanki izleyiciden bir özdeşleşme, bir teselli bekliyor. Bu karakterler gerçek değil. En azından yaşadığımız dünyada bu kadar basit değiller. Bu sığlıkta işleri beğenmeyenleri de “Hollywoodcu” ve “Popüler kültür kölesi” olarak adlandırarak boktan ve boş varoluşsal mastürbasyonunu herkese yediremezsin. nek alıp kendine peygamber belirlediği Bergman, Dostoyevski gibi ustaların işlerinin yakınına yaklaşamıyor bile. Bu iddiaya ve başarıya sahip olamamasını doğal karşılamakla beraber onlar olmaya çalışmasını da son derece anlamsız buluyorum. Bu kadar tek boyutlu karakterlerle olmaya çalıştığın kişilerin farkında olmadığını düşünüyorum.

Son olarak, sinema dediğimiz şeyin bir çeşit duygusal manipülasyon olduğu kabul edilebilir. Ama bu manipülasyon, seyirciyi gerçekten bir şey hissettirmek ve düşündürmek için yapılır. Demirkubuz’un filmlerindeki manipülasyon ise tamamen bir "kendini haklı çıkarma" çabası. İzleyici onun acısını, onun zavallılığını, onun yalnızlığını anlamalı ve onun dünyasına boyun eğmeli. Ancak bu dünyanın içinde ne samimiyet var ne de bir gerçeklik. O yüzden, bu tarz sinemaya ancak şu cümleyle cevap verilebilir: “Tamam kanka, sensin.”

#sinema #deneme #şahsi`,
  },
];
