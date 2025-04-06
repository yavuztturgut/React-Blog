import './App.css'
import React from 'react'
import BlogDetail from "./components/BlogDetail.jsx";
import BlogList from "./components/BlogList.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
//Blog verileri
  const blogs = [
    {id:1, title:"React Props nedir?", content:"React'te props (properties), bileşenlere veri iletmek için kullanılan bir mekanizmadır. Bir bileşenin dışarıdan aldığı değerler, props aracılığıyla bileşene aktarılır. Yani, bir bileşen, üst bileşeninden aldığı verileri props olarak kabul eder ve bu verileri kendi içinde kullanabilir. Props, bir bileşenin dışarıya olan arabirimini temsil eder ve bileşenin içindeki durumu değiştiremez; yalnızca veri taşır. Props, sabittir ve değiştirilemez. Üst bileşenden alt bileşene veri iletmek için kullanılır, bu sayede bileşenler arasında bilgi paylaşımı sağlanmış olur. Örneğin, bir `Card` bileşenine başlık ve içerik gibi veriler props olarak gönderilebilir, ve bu veriler `Card` bileşeni içinde render edilerek görsel olarak gösterilir."},
    {id:2, title:"React Component nedir?", content:"React'te component (bileşen), bir uygulamanın UI (kullanıcı arayüzü) parçalarını oluşturan, tekrar kullanılabilir işlevsel veya sınıf tabanlı yapılar olarak tanımlanabilir. Bileşenler, belirli bir UI öğesini tanımlar ve bu öğenin nasıl görüneceğini ve nasıl davranacağını belirler. Bir bileşen, tıpkı bir fonksiyon gibi, verilen girdilere göre çıktılar üretir. Bu girdiler, bileşene aktarılan props aracılığıyla dışarıdan alınabilir. React'teki bileşenler, genellikle görsel bileşenler olmakla birlikte, aynı zamanda işlevsel bileşenler de olabilir. İşlevsel bileşenler, genellikle sadece render edilen JSX'i döndüren fonksiyonlardır. Sınıf tabanlı bileşenler ise, daha karmaşık durum yönetimi ve yaşam döngüsü metodlarına sahip olabilirler. Bileşenler, bir uygulamanın farklı kısımlarını bağımsız olarak yönetmeyi ve tekrar kullanılabilirliği kolaylaştırmayı sağlar."},
    {id:3, title:"React useState nedir?", content:"React'te useState, fonksiyonel bileşenlerde durum (state) yönetimini sağlamak için kullanılan bir hook'tur. React'teki durum, bileşenin render edilmesini ve UI'nin dinamik bir şekilde güncellenmesini sağlayan verilerdir. useState, bir bileşene bağlı olarak bir değişkenin değerini saklamaya ve bu değeri güncellemeye olanak tanır. useState, başlangıç değeri olarak bir argüman alır ve bir dizi döndürür: ilki durumun şu anki değeri, ikincisi ise bu durumu güncellemek için kullanılan bir fonksiyondur.\n" +
          "\n" +
          "Örneğin, bir sayaç uygulamasında sayacı tutmak için useState kullanılabilir. Başlangıç değeri olarak 0 verilmiş ve bu değeri güncellemek için bir fonksiyon elde edilir. Bu fonksiyon, bir butona tıklandığında sayacın değerini artırmak için kullanılabilir."}
  ]

  return (

    <div className="myApp">
      {/* Router kurulur, sayfalar arası geçişler  için.*/}
    <BrowserRouter>
      <Routes>
        {/* Belli bir url ye girildiği zaman, bir bileşeni çağırır. */}
        <Route path="/" element={<BlogList blogs={blogs}/>} />
        <Route path="/bloglarım/:id" element={<BlogDetail blogs={blogs}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
