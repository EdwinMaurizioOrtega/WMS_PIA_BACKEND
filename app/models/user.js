//Sentecia consultar el usuario
export const SqlQuerySignIn = (usuario) => 'SELECT * FROM "GRUPO_EMPRESARIAL_HT"."ht_users" WHERE "email" LIKE \'' + usuario + '\'';
// export const SqlQuerySignIn = (usuario) => {
//    return  'SELECT * FROM "GRUPO_EMPRESARIAL_HT"."ht_users" WHERE "user_login" LIKE \'' + usuario + '\'';
// }



