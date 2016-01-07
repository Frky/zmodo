var codelist=new Array();
codelist=["zh-CN","en-US","cs-CZ","de-DE","fr-FR","ru-RU","es-CL","ja-JP","pt-PT","it-IT","en-XA"];
function systemLabelSet()
{
  var code=window.navigator.language;
  setLabel(code);
  value=1;
  for(i=0;i<codelist.length;i++)
  {
    if(code==codelist[i])
    {
      value=i;
    }
  }
  document.getElementById("language").value=value;

}

function changeLanguage(type)
{
  var code=codelist[type];
  setLabel(code);
}

function setLabel(code)
{
  var username="UserName";
  var password="Password";
  var videoport="VideoPort";
  var language="Language";
  switch(code)
  {
    case "zh-CN" : username="用户名";
               password="密码";
               videoport="视频端口";
               language="语言";
               break;
    case "cs-CZ" : username="Uživatelské jméno";
               password="Heslo";
               videoport="Port videa";
               language="Jazyk";
               break;
    case "de-DE" : username="Benutzername";
               password="Passwort";
               videoport="Video-Port";
               language="Sprache";
               break;
    case "fr-FR" : username="Nom d'utilisateur";
               password="Mot de passe";
               videoport="Port Védio";
               language="Langues";
               break;
    case "ru-RU" : username="Имя пользователя";
               password="Пароль";
               videoport="Video Port";
               language="Язык";
               break;
    case "es-CL" : username="Nombre de usuario";
               password="Contraseña";
               videoport="Puerto de vídeo";
               language="Idioma";
               break;       
    case "ja-JP" : username="ユーザネーム";
               password="パスワード";
               videoport="ビデオポート";
               language="言葉";
               break;
    case "pt-PT" : username="Nome de Utilizador";
               password="Palavra passe";
               videoport="Porta Vídeo";
               language="Idioma";
               break;
    case "it-IT" : username="Nome Utente";
               password="Password";
               videoport="Porta Video";
               language="Lingua";
               break;  
    case "en-XA" : username="أسم المستخدم";
               password="كلمة المرور";
               videoport="منفذ فيديو";
               language="اللغة";
               break;    
  }
  document.getElementById("label_username").innerHTML=username+":";
  document.getElementById("label_password").innerHTML=password+":";
  document.getElementById("label_videoport").innerHTML=videoport+":";
  document.getElementById("label_language").innerHTML=language+":";
}