import React from 'react';
import '../components/Summary.css'; // Pastikan nama file CSS sesuai
import gerak from '../assets/gerak.gif';
import pdfFile from '../assets/summary1.pdf';
import pdfFile2 from '../assets/summary2.pdf';
import pdfFile3 from '../assets/summary3.pdf';
import pdfFile4 from '../assets/summary4.pdf';

const Summary = () => {
    return (
        <div>
            <div className="sistem-card">
                <div className="sistem-content">
                    <div className="sistem-text">
                        <h2 id='Title'>Summary Pertama</h2>
                        <embed id="pdf1" style={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }} src={pdfFile} type="application/pdf" width="60%" height="300px" />
                        <p>
                            Keamanan Komputer adalah pencegahan dari serangan serta mendeteksi pengguna komputer atau pengakses jaringan yang tidak bertanggung jawab dan tidak dikenali dalam sistem komputer.
                            Mudahnya adalah usaha melindungi aset dan menjaga privasi dari para cracker yang menyerang.
                            Di dalam sistem pengaman komputer harus memiliki :
                        </p>
                        <ul>
                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Sistem yang aman</ul>
                            <li>1.	Mengorbankan banyak waktu</li>
                            <li>2.	Mengorbankan banyak tenaga</li>
                            <li>3.	Mengorbankan banyak biaya besar</li>

                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Tahap- tahap perlindungan dari penyerangan</ul>
                            <li>1.	Spying dan analyzing</li>
                            <li>2.	Initial access to the target</li>
                            <li>3.	Full system access</li>
                            <li>4.	Covering track dan instaling backdoor</li>

                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Keamanan dan kerahasiaan data</ul>
                            <li>1.	Top secret </li>
                            <li>2.	Contidensial </li>
                            <li>3.	Restricted </li>
                            <li>4.	Internal use</li>
                            <li>5.	Public</li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="sistem-card">
                <div className="sistem-content">
                    <div className="sistem-text">
                        <h2 id='Title'>Summary Kedua</h2>
                        <embed id="pdf1" style={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }} src={pdfFile2} type="application/pdf" width="60%" height="300px" />

                        <ul>
                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Beberapa aspek – aspek keamanan komputer :</ul>
                            <li>1.	Authentication</li>
                            <li>2.	Intergrity</li>
                            <li>3.	Nonrepudiation</li>
                            <li>4.	Authority</li>
                            <li>5.	Confidentiality</li>
                            <li>6.	Privacy</li>
                            <li>7.	Availability</li>
                            <li>8.	Access Control</li>

                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Aspek – aspek ancaman komputer :</ul>
                            <li>1.	Interuption</li>
                            <li>2.	Interception</li>
                            <li>3.	Modifikasi</li>
                            <li>4.	Febrication</li>

                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Security Methodology</ul>
                            <li>1.	Physical Security</li>
                            <li>2.	Data Security</li>
                            <li>3.	Database Security</li>
                            <li>4.	Computer security</li>
                            <li>5.	Device Security</li>
                            <li>6.	Application Security</li>
                            <li>7.	Network Security</li>
                            <li>8.	Informasi Security</li>
                            <li>9.	Security</li>

                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Kriptografi</ul>
                            <li>Dari bahasa Yunani
                                Kripto = rahasia
                                Graphia = tulisan
                                Menurut terminologinya kriptografi adalah ilmu seni untuk menjaga keamanan pesan ketika pesan dikirim dari suatu tempat ke tempat yang lain.
                            </li>

                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Konsep Kriptografi </ul>
                            <li>Enkripsi = merubah pesan atau data menjadi bentuk
                                yang sulit diartikan.
                                Deskripsi = merubah pesan atau data yang sulit
                                diartikan menjadi mudah untuk diartikan atau dibaca.
                            </li>

                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Kriptografi Klasik</ul>
                            <li>
                            Kriptografi merupakan suatu strategi supaya data atau dokumen kita aman dari orang yang tidak berhak.
                            </li>
                            <li>
                            <li>
                            Teknik Substitusi Cipher merupakan penggantian setiapkarakter dari plaintext dengan karakter lainnya.
                            </li>
                           
                            </li>
                        </ul>

                       
                    </div>
                </div>
            </div>


            <div className="sistem-card">
                <div className="sistem-content">
                    <div className="sistem-text">
                        <h2 id='Title'>Summary Ketiga</h2>
                        <embed id="pdf1" style={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }} src={pdfFile3} type="application/pdf" width="60%" height="300px" />
                        <p>
                        Web security adalah segala tindakan dengan tujuan mengamankan dan melindungi website dari serangan internet yang biasanya dilakukan oleh hacker atau penjahat dunia maya. Pada dasarnya, web security adalah tindakan untuk melindungi website, atau disebut juga dengan cyber security.
                        </p>
                        <ul>
                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>SSL (Secure Socket Layer)</ul>
                            <li>Secure Socket Layer adalah protokol keamanan internet berbasis enkripsi yang biasa digunakan pada sistem keamanan website. SSL sendiri menjadi standar keamanan website yang bekerja dengan mengenksripsi lalu lintas data pada dari web klien ke web server, atau dari browser ke website. SSL akan menerjemahkan informasi sensitif seperti data pribadi, nomor kartu kredit, hingga kata sandi menjadi kode yang sulit dibaca atau dienkripsi. Pengubahan yang dilakukan protokol SSL ini dapat membuat data pada website.</li>
                            
                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>SEO (Search Engine Optimization)</ul>
                            <li>Merupakan teknik yang digunakan untuk optimisasi suatu website dengan tujuan memudahkan mesin pencari untuk menemukan halaman/website dan menempatkan di halaman pertama di mesin pencari dengan keyword yang ditentukan oleh user</li>
                            

                        </ul>
                    </div>
                </div>
            </div>


            <div className="sistem-card">
                <div className="sistem-content">
                    <div className="sistem-text">
                        <h2 id='Title'>Summary Keempat</h2>
                        <embed id="pdf1" style={{ margin: 'auto', alignItems: 'center', justifyContent: 'center' }} src={pdfFile4} type="application/pdf" width="60%" height="300px" />
                        <p>
                            Sistem pengaman Database yaitu Kumpulan data yang disimpan dan diatur atau diorganisasikan sehingga data tersebut dapat diambil atau dicari dengan mudah dan efisien.
                        </p>
                        <ul>
                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Langkah-langkah Melindungi Database :</ul>
                            <li>1.	Database harus dikonfigurasi dengan benar </li>
                            <li>2.	Pemberian otoritas user sesuai dengan kebutuhan</li>
                            <li>3.	Password tidak diberikan kepada user </li>
                            <li>4.	Jangan menggunakan user root sistem atau selevelnya / tanpa password</li>

                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Infrastuktur Jaringan</ul>
                            <li>1.	Pisahkan database server dari aplikasi server</li>
                            <li>2.	Jangan menaruh database server dari area DMZ</li>
                            <li>3.	Ganti peralatan hub dan switch pisahkan database server dari aplikasi server</li>
                            <li>4.	Enkripsi data antara web dan database server</li>

                            <ul style={{ fontWeight: 'bold', marginTop: 10 }}>Permodelan Data </ul>
                            <li>Model data adalah representasi yang menggambarkan data dan hubungan diantara mereka untuk suatu proses tertentu model data  </li>

                            
                        </ul>
                    </div>
                </div>
            </div>



        </div>

    );
}

export default Summary;
