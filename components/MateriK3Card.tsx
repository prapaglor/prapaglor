'use client';

import React, { useEffect } from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MateriK3Card = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 py-20"
      data-aos="fade-up"
    >
      <div className="w-full max-w-7xl">
        <h2 className="text-xl md:text-5xl font-bold text-white md:pt-10 text-left">
          Edukasi Keselamatan & Kesehatan Kerja (K3)
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
};

export default MateriK3Card;

const PengertianK3 = ({ judul }: { judul: string }) => {
  const tujuanUmum = [
    "Perlindungan bagi pegawai dari risiko kerja.",
    "Penjagaan terhadap keselamatan dan kesehatan pekerja.",
    "Memberikan bekal serta kesiapan saat bekerja.",
    "Menjamin keberlangsungan sumber daya manusia dan alat kerja.",
    "Meningkatkan kesejahteraan dan kenyamanan kerja.",
    "Menumbuhkan budaya kerja yang aman dan sadar risiko.",
  ];

  const risikoBahaya = [
    "Risiko Ergonomi — akibat posisi kerja yang salah atau peralatan yang tidak ergonomis.",
    "Risiko Fisik — seperti paparan kebisingan, suhu ekstrem, atau radiasi.",
    "Risiko Biologis — melibatkan virus, bakteri, atau organisme berbahaya.",
    "Risiko Kimiawi — bahan kimia beracun, uap, atau gas yang berbahaya.",
    "Risiko Psikologis — tekanan mental, stres kerja, atau beban emosional.",
  ];

  return (
    <div className="bg-gradient-to-r from-[#295C55] to-[#143d47] p-8 md:p-14 rounded-3xl mb-4 text-white font-sans leading-relaxed">
      <p className="text-base md:text-2xl max-w-3xl mx-auto">
        <span className="font-bold text-white">{judul}</span>{' '}
        mengacu pada berbagai upaya untuk menjamin dan melindungi keselamatan serta kesehatan tenaga kerja di lingkungan kerja. 
        Dalam Peraturan Pemerintah Republik Indonesia Nomor 50 Tahun 2012 tentang Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3), K3 didefinisikan sebagai segala kegiatan yang bertujuan untuk menjamin dan melindungi keselamatan serta kesehatan tenaga kerja melalui upaya pencegahan kecelakaan kerja dan penyakit akibat kerja.
        <br /><br />
        Sementara itu, menurut standar internasional OHSAS 18001, K3 juga mencakup berbagai tindakan yang bertujuan untuk menjamin dan melindungi keselamatan dan kesehatan tenaga kerja melalui pencegahan risiko kecelakaan maupun penyakit akibat aktivitas kerja.
        <br /><br />
        Dengan demikian, K3 dapat disimpulkan sebagai bentuk komitmen perusahaan atau instansi kerja dalam menciptakan lingkungan kerja yang aman dan sehat, agar pekerja terhindar dari potensi kecelakaan maupun gangguan kesehatan yang timbul akibat aktivitas kerja sehari-hari.
      </p>

      <img
        src="/K3_logo.png"
        alt="Edukasi K3"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8 mb-10"
      />

      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Maksud dan Tujuan dari K3</h2>
        <ul className="list-disc pl-6 text-base md:text-xl space-y-2">
          <li>
            Meningkatkan efektivitas perlindungan keselamatan dan kesehatan kerja yang terencana, terukur, terstruktur, dan terintegrasi.
          </li>
          <li>
            Mencegah serta mengurangi kecelakaan kerja dan penyakit akibat kerja dengan melibatkan unsur manajemen, pekerja/buruh, dan/atau serikat pekerja.
          </li>
          <li>
            Menciptakan tempat kerja yang aman, nyaman, dan efisien guna mendorong produktivitas.
          </li>
        </ul>
      </div>

      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Tujuan Umum K3</h2>
        <ul className="list-disc pl-6 text-base md:text-xl space-y-2">
          {tujuanUmum.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Risiko Bahaya di Tempat Kerja</h2>
        <p className="text-base md:text-xl mb-4">
          Setiap jenis pekerjaan memiliki risiko tersendiri. Dengan mengidentifikasi jenis kecelakaan yang mungkin terjadi, perusahaan dapat mengambil langkah preventif untuk meminimalkan risiko kecelakaan dan memberikan perlindungan yang optimal bagi para pegawai.
        </p>
        <ul className="list-disc pl-6 text-base md:text-xl space-y-2">
          {risikoBahaya.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Hak Perlindungan bagi Tenaga Kerja Wanita (TKW)</h2>

        <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-6">1. Sebelum Keberangkatan</h3>
        <ul className="list-disc pl-6 text-base md:text-xl space-y-1">
          <li>Mendapat informasi yang jelas dan lengkap.</li>
          <li>Memiliki kontrak kerja resmi dan dipahami dengan baik.</li>
          <li>Ditempatkan melalui lembaga resmi (P3MI).</li>
          <li>Mendapat pelatihan yang layak dan sesuai.</li>
          <li>Memperoleh asuransi perlindungan kerja.</li>
          <li>Memiliki hak atas dokumen pribadi seperti paspor dan identitas.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-6">2. Selama Bekerja di Negara Tujuan</h3>
        <ul className="list-disc pl-6 text-base md:text-xl space-y-1">
          <li>Gaji dan jam kerja sesuai kontrak kerja.</li>
          <li>Lingkungan kerja yang aman dan manusiawi.</li>
          <li>Hak untuk berkomunikasi dan mendapatkan kebebasan pribadi.</li>
          <li>Dokumen penting tetap dipegang oleh TKW.</li>
          <li>Akses terhadap layanan kesehatan dan bantuan konsuler.</li>
          <li>Tidak dipindahtangankan secara sembarangan.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-6">3. Setelah Kembali ke Indonesia</h3>
        <ul className="list-disc pl-6 text-base md:text-xl space-y-1">
          <li>Proses pemulangan yang aman dan layak.</li>
          <li>Penyelesaian masalah pasca kerja secara adil dan transparan.</li>
        </ul>
      </div>
    </div>
  );
};

const TinjauanUmum = ({ judul }: { judul: string }) => {
  return (
    <div className="bg-gradient-to-r from-[#295C55] to-[#143d47] p-8 md:p-14 rounded-3xl mb-4 text-white font-sans leading-relaxed">
      {/* Tinjauan Umum */}
      <p className="text-base md:text-2xl max-w-3xl mx-auto">
        <span className="font-bold text-white">{judul}</span>{' '}
        membahas pentingnya perlindungan bagi Pekerja Migran Indonesia (PMI), yang kerap berada dalam posisi rentan di negara tujuan.
        <br /><br />
        Pasal 27 ayat (2) UUD 1945 menyatakan bahwa setiap warga negara berhak atas pekerjaan dan penghidupan yang layak. Namun, dalam praktiknya, banyak PMI mengalami eksploitasi, terutama di sektor informal yang sering tidak memiliki perlindungan hukum ketenagakerjaan.
        <br /><br />
        Migrasi pekerja Indonesia ke luar negeri telah berlangsung sejak masa kolonial, saat migrasi bersifat paksaan dan permanen demi kepentingan penjajah dan pengusaha asing. Para pekerja kala itu dipaksa bekerja tanpa perlindungan, bahkan diperlakukan secara tidak manusiawi.
        <br /><br />
        Hingga pertengahan 2006, tercatat lebih dari 4,4 juta PMI tersebar di berbagai negara. Jumlah ini menempatkan Indonesia sebagai negara pengirim pekerja migran terbesar kedua di Asia Tenggara setelah Filipina.
        <br /><br />
        Status sebagai migran, ditambah dengan kondisi kerja yang berat dan minim regulasi, membuat PMI sangat rentan terhadap pelanggaran hak asasi, eksploitasi, dan perlakuan tidak adil.
      </p>

      <img
        src="/tki.jpg"
        alt="Edukasi K3"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8 mb-12"
      />

      {/* DASAR HUKUM */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          DASAR HUKUM PERLINDUNGAN PEKERJA MIGRAN
        </h2>

        <p className="text-base md:text-xl mb-4">
          Perlindungan PMI secara hukum mengalami penguatan dari regulasi tingkat menteri hingga undang-undang dan peraturan pelaksana teknis. Berikut sumber hukumnya:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-base md:text-xl mb-6">
          <li>UUD NRI Tahun 1945 Pasal 27 ayat (2)</li>
          <li>Keputusan Menakertrans No. Kep-104A/MEN/2002</li>
          <li>Undang-Undang No. 13 Tahun 2003 tentang Ketenagakerjaan</li>
          <li>Undang-Undang No. 39 Tahun 2004 tentang Penempatan dan Perlindungan TKI</li>
          <li>Undang-Undang No. 18 Tahun 2017 tentang Perlindungan Pekerja Migran Indonesia</li>
        </ul>

        <p className="text-base md:text-xl font-semibold mb-2">Peraturan Teknis Penempatan dan Perlindungan PMI:</p>
        <ul className="list-disc pl-6 space-y-1 text-base md:text-lg mb-8">
          <li>Peraturan Pemerintah No. 3 Tahun 2013</li>
          <li>Peraturan Pemerintah No. 10 Tahun 2020</li>
          <li>Peraturan Presiden No. 81 Tahun 2006</li>
          <li>Peraturan Presiden No. 90 Tahun 2019</li>
          <li>Permenakertrans No. PER-05/MEN/III/2005</li>
          <li>Permenakertrans No. PER-19/MEN/VI/2006</li>
          <li>Permenakertrans No. PER-20/MEN/X/2007</li>
          <li>Permenakertrans No. PER-22/MEN/XII/2008</li>
          <li>Permenakertrans No. PER-05/MEN/III/2009</li>
          <li>Permenakertrans No. PER-16/MEN/VIII/2009</li>
          <li>Permenakertrans No. PER-17/MEN/VIII/2009</li>
          <li>Permenakertrans No. PER-18/MEN/VIII/2009</li>
          <li>Permenakertrans No. PER.14/MEN/X/2010</li>
          <li>Permenaker No. 22 Tahun 2014</li>
          <li>Permenaker No. 9 Tahun 2019</li>
          <li>Permenaker No. 17 Tahun 2019</li>
          <li>Permenaker No. 7 Tahun 2020</li>
        </ul>

        <p className="text-base md:text-xl mb-4">
          Pelaksanaan UU PPMI membutuhkan kolaborasi lintas sektor. Strategi nasional perlindungan PMI harus mencakup:
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-base md:text-xl mb-6">
          <li>Regulasi pelaksana yang dapat diimplementasikan secara efektif.</li>
          <li>Partisipasi masyarakat sipil dalam pengambilan kebijakan untuk memastikan keterwakilan dan transparansi.</li>
          <li>Akuntabilitas yang jelas antar pemangku kepentingan dengan indikator keberhasilan yang terukur.</li>
        </ol>

        <p className="text-base md:text-xl">
          Sistem informasi kerja yang terintegrasi juga diperlukan agar keluarga PMI dapat mengetahui lokasi kerja anggota keluarga secara transparan dan real-time. Hal ini menjadi bagian penting dari pelaksanaan perlindungan menyeluruh berdasarkan amanat UU PPMI.
        </p>
      </div>

      {/* Tambahan: Strategi dan Sistem Perlindungan */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          STRATEGI NASIONAL DAN SISTEM INFORMASI TERINTEGRASI
        </h2>

        <p className="text-base md:text-xl mb-4">
          Pelaksanaan Undang-Undang No. 18 Tahun 2017 tentang Perlindungan Pekerja Migran Indonesia memerlukan koordinasi lintas sektor yang dipimpin oleh satu kementerian yang ditunjuk secara resmi. Strategi nasional yang komprehensif perlu dirumuskan untuk memastikan efektivitas perlindungan PMI.
        </p>

        <p className="text-base md:text-xl mb-4">
          Dalam perumusan strategi tersebut, terdapat tiga prinsip utama:
        </p>

        <ol className="list-decimal pl-6 space-y-2 text-base md:text-xl mb-6">
          <li>
            <strong>Regulasi pelaksana yang implementatif</strong>, agar birokrasi dapat berfungsi dengan efisien.
          </li>
          <li>
            <strong>Pelibatan masyarakat sipil</strong> dalam pengambilan kebijakan untuk menjamin transparansi dan keterwakilan.
          </li>
          <li>
            <strong>Akuntabilitas yang jelas</strong>, termasuk penetapan tanggung jawab dan indikator keberhasilan.
          </li>
        </ol>

        <p className="text-base md:text-xl mb-4">
          Selain itu, penting untuk membangun <strong>sistem informasi terintegrasi</strong> yang memungkinkan keluarga PMI mengetahui posisi kerja anggota keluarganya berdasarkan data pasar kerja. Sistem ini akan memperkuat transparansi, monitoring, dan kepercayaan terhadap mekanisme perlindungan PMI di luar negeri.
        </p>
      </div>

      {/* NORMA DASAR KETENAGAKERJAAN */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          NORMA DASAR KETENAGAKERJAAN
        </h2>

        <div className="overflow-x-auto">
          <table className="table-auto border border-white w-full text-base md:text-lg">
            <thead>
              <tr className="bg-white text-black">
                <th className="border border-white px-4 py-2">No.</th>
                <th className="border border-white px-4 py-2">Pasal</th>
                <th className="border border-white px-4 py-2">Ketentuan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 text-center">1</td>
                <td className="border px-4 py-2 font-semibold">Pasal 27 ayat (2)</td>
                <td className="border px-4 py-2">
                  Tiap-tiap warga negara berhak atas pekerjaan dan penghidupan yang layak bagi kemanusiaan.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center">2</td>
                <td className="border px-4 py-2 font-semibold">Pasal 28D ayat (2)</td>
                <td className="border px-4 py-2">
                  Setiap orang berhak untuk bekerja serta mendapat imbalan dan perlakuan yang adil dan layak dalam hubungan kerja.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center">3</td>
                <td className="border px-4 py-2 font-semibold">Pasal 28H ayat (1)</td>
                <td className="border px-4 py-2">
                  Setiap orang berhak untuk hidup sejahtera lahir batin, bertempat tinggal, dan mendapatkan lingkungan hidup yang baik dan sehat serta berhak memperoleh pelayanan kesehatan.
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2 text-center">4</td>
                <td className="border px-4 py-2 font-semibold">Pasal 28H ayat (2)</td>
                <td className="border px-4 py-2">
                  Setiap orang berhak mendapat kemudahan dan perlakuan khusus untuk memperoleh kesempatan dan manfaat yang sama guna mencapai persamaan dan keadilan.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-base md:text-xl mt-6">
          Ketentuan dasar dalam UUD NRI 1945 di atas merupakan ketentuan-ketentuan pokok dalam pembangunan ketenagakerjaan. 
          Secara eksplisit, perlindungan ketenagakerjaan dapat dilihat dari Pasal <strong>28D ayat (2)</strong> dan <strong>Pasal 27 ayat (2)</strong>.
        </p>
      </div>

      {/* ASAS HUKUM */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">ASAS HUKUM</h2>

        <p className="text-base md:text-xl mb-4 leading-relaxed">
          Asas atau prinsip hukum merupakan dasar atau petunjuk arah dalam pembentukan norma hukum, atau disebut pula sebagai <strong>meta norma</strong>—yakni nilai-nilai yang berada di balik norma atau kaidah hukum.
        </p>

        <p className="text-base md:text-xl mb-4">
          Dalam <strong>Pasal 2 UU No. 18 Tahun 2017</strong> tentang Pelindungan Pekerja Migran Indonesia, disebutkan bahwa pelindungan PMI berlandaskan pada asas:
          keterpaduan; persamaan hak; pengakuan atas martabat dan hak asasi manusia; demokrasi; keadilan sosial; kesetaraan dan keadilan gender; nondiskriminasi; anti-perdagangan manusia; transparansi; akuntabilitas; dan berkelanjutan.
        </p>

        <p className="text-base md:text-xl mb-4">
          Berdasarkan hal tersebut, beberapa asas utama yang dijadikan landasan pelindungan terhadap PMI dapat dijabarkan sebagai berikut:
        </p>

        <ul className="list-decimal pl-6 text-base md:text-xl space-y-2">
          <li><strong>Asas Keterpaduan (Integration)</strong> – Mendorong koordinasi lintas sektor yang sinergis dan menyeluruh.</li>
          <li><strong>Asas Persamaan Hak (Equal Right)</strong> – Menjamin bahwa setiap PMI memiliki hak yang sama tanpa diskriminasi.</li>
          <li><strong>Asas Demokrasi (Democracy)</strong> – Menekankan partisipasi aktif dan transparansi dalam perlindungan PMI.</li>
          <li><strong>Asas Keadilan Sosial</strong> – Memberikan perlakuan yang adil dan merata bagi seluruh PMI.</li>
          <li><strong>Asas Kesetaraan dan Keadilan Gender (Equity and Justice of Gender)</strong> – Menghapus kesenjangan dan diskriminasi berbasis gender.</li>
          <li><strong>Asas Anti Diskriminasi (Non Discrimination)</strong> – Melarang perlakuan berbeda atas dasar apapun, termasuk suku, agama, dan jenis kelamin.</li>
          <li><strong>Asas Anti Perdagangan Manusia (No Human Trafficking)</strong> – Melindungi PMI dari segala bentuk eksploitasi dan perdagangan manusia.</li>
        </ul>
      </div>
    </div>
  );
};

const Literasi = ({ judul }: { judul: string }) => {
  return (
    <div className="bg-gradient-to-r from-[#295C55] to-[#143d47] p-8 md:p-14 rounded-3xl mb-4 text-white font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto">
        {/* Pembuka */}
        <p className="text-base md:text-2xl mb-6">
          <span className="font-bold text-white">{judul}</span>{' '}
          merupakan pondasi penting dalam melindungi diri bagi calon Pekerja Migran Indonesia (PMI). Literasi mengenai perjanjian kerja diibaratkan seperti memegang peta dan kompas sebelum berlayar ke lautan luas. Tanpa pemahaman mendalam terhadap kontrak kerja, PMI sangat rentan terhadap berbagai permasalahan serius di negara tujuan.
        </p>

        {/* Kontrak & Risiko */}
        <p className="text-base md:text-xl mb-4">
          Kontrak kerja adalah dokumen hukum yang mengatur seluruh hak dan kewajiban PMI sebagai pekerja, serta hak dan kewajiban pemberi kerja. Di dalamnya mencakup rincian mengenai gaji, jam kerja, cuti, tunjangan, akomodasi, hingga prosedur penyelesaian perselisihan. Jika PMI tidak memahami isi kontrak, mereka bisa saja menyetujui klausul yang merugikan atau bahkan melanggar hak-haknya.
        </p>

        <p className="text-base md:text-xl mb-4">
          Banyak kasus eksploitasi seperti gaji tidak dibayar penuh, jam kerja berlebihan, atau tidak mendapat cuti, terjadi karena PMI menandatangani kontrak tanpa membacanya dengan baik. Oleh karena itu, Badan Pelindungan Pekerja Migran Indonesia (BP2MI) menekankan pentingnya edukasi terhadap hak dan kewajiban agar PMI terhindar dari penipuan dan eksploitasi.
        </p>

        <p className="text-base md:text-xl mb-4">
          Dengan literasi hukum yang baik, PMI dapat mengenali hak-haknya, mempertanyakan isi kontrak yang meragukan, dan memiliki dasar hukum yang kuat apabila terjadi perselisihan. Memahami kontrak kerja bukan sekadar formalitas, melainkan <strong>investasi perlindungan diri</strong> yang sangat penting sejak awal proses keberangkatan.
        </p>

        {/* Dasar Hukum */}
        <p className="text-base md:text-xl mb-4">
          Berdasarkan <strong>Pasal 1601 KUHPerdata</strong>, perjanjian kerja didefinisikan sebagai kesepakatan antara buruh atau pekerja dengan majikan untuk melakukan pekerjaan dalam jangka waktu tertentu di bawah perintah, dengan imbalan berupa upah.
          Sementara itu, menurut <strong>UU No. 13 Tahun 2003</strong> tentang Ketenagakerjaan, perjanjian kerja lebih bersifat umum, yaitu hubungan antara pekerja dan pengusaha yang memuat hak dan kewajiban kedua belah pihak.
        </p>

        {/* Definisi PMI */}
        <p className="text-base md:text-xl mb-4">
          <strong>Pekerja Migran Indonesia (PMI)</strong> adalah setiap WNI yang akan, sedang, atau telah bekerja dengan menerima upah di luar wilayah RI. PMI dapat bekerja pada pemberi kerja berbadan hukum, perorangan, atau sebagai pelaut awak kapal dan perikanan. Kontrak kerja bagi PMI adalah dokumen hukum utama yang mengikat antara pekerja dan pemberi kerja di negara tujuan.
        </p>

        {/* Bagian-bagian Penting Kontrak */}
        <p className="text-base md:text-xl font-semibold mt-6 mb-2">
          Berikut adalah bagian-bagian penting yang wajib ada dan perlu diperhatikan dalam perjanjian kerja:
        </p>
        <ul className="list-decimal pl-6 space-y-1 text-base md:text-xl mb-6">
          <li>Identitas para pihak</li>
          <li>Hak dan kewajiban para pihak</li>
          <li>Jenis pekerjaan dan tempat kerja</li>
          <li>Jangka waktu perjanjian kerja</li>
          <li>Upah atau gaji</li>
          <li>Waktu kerja dan lembur</li>
          <li>Asuransi dan jaminan sosial</li>
          <li>Cuti tahunan dan libur umum</li>
          <li>Repatriasi</li>
          <li>Pengakhiran perjanjian kerja oleh pemberi kerja</li>
          <li>Pengakhiran perjanjian oleh pekerja</li>
          <li>Pemberhentian dengan dan tanpa pemberitahuan</li>
          <li>Ganti rugi</li>
          <li>Transportasi dan akomodasi</li>
          <li>Penyelesaian sengketa</li>
        </ul>

        {/* Tindakan sebelum Menandatangani */}
        <p className="text-base md:text-xl font-semibold mb-2">
          Tindakan yang harus dilakukan PMI sebelum menyetujui dan menandatangani kontrak kerja:
        </p>
        <ul className="list-decimal pl-6 space-y-1 text-base md:text-xl mb-6">
          <li>Baca dengan seksama seluruh isi kontrak</li>
          <li>Jangan ragu untuk bertanya jika ada yang tidak dimengerti</li>
          <li>Bandingkan isi kontrak dengan informasi resmi yang telah diberikan</li>
          <li>Minta salinan kontrak untuk disimpan pribadi</li>
          <li>Pastikan tidak menandatangani di bawah tekanan</li>
          <li>Perhatikan bahasa yang digunakan — minta terjemahan bila diperlukan</li>
        </ul>

        {/* Penutup */}
        <p className="text-base md:text-xl mt-4">
          Pentingnya literasi perjanjian kerja bagi PMI tidak dapat diabaikan. Pemahaman mendalam terhadap isi kontrak merupakan <strong>fondasi utama</strong> dan <strong>tameng terkuat</strong> bagi perlindungan hukum PMI. Dengan kemampuan ini, PMI dapat mengenali potensi risiko sejak dini dan mencegah terjadinya eksploitasi, penipuan, atau pelanggaran hak.
          <br /><br />
          Pada akhirnya, literasi yang kuat akan memberdayakan PMI untuk membuat keputusan yang lebih tepat, dan menjadikan proses migrasi berlangsung lebih aman, bermartabat, serta sesuai dengan harapan.
        </p>
      </div>

      {/* Ilustrasi */}
      <img
        src="/K3_logo.png"
        alt="Edukasi Literasi Kontrak Kerja"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
      />
    </div>
  );
};

const PeranPemerintah = ({ judul }: { judul: string }) => {
  return (
    <div className="bg-gradient-to-r from-[#295C55] to-[#143d47] p-8 md:p-14 rounded-3xl mb-4 text-white font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto">
        {/* Pembukaan */}
        <p className="text-base md:text-2xl mb-6">
          <span className="font-bold">{judul}</span>{' '}
          merujuk pada upaya negara dalam memastikan keselamatan dan kesejahteraan Pekerja Migran Indonesia (PMI) di setiap tahap proses kerja mereka.
        </p>

        <p className="text-base md:text-xl mb-4">
          Berdasarkan <strong>Pasal 1 Angka 2 UU No. 18 Tahun 2017</strong>, Pekerja Migran Indonesia adalah setiap warga negara Indonesia yang akan, sedang, atau telah melakukan pekerjaan dengan menerima upah di luar wilayah Republik Indonesia.
        </p>

        <p className="text-base md:text-xl mb-4">
          PMI dikenal sebagai <strong>pahlawan devisa</strong> karena kontribusinya terhadap perekonomian nasional. Namun, dalam praktiknya, PMI kerap menghadapi risiko seperti ketidakjelasan informasi penempatan, eksploitasi kerja, kekerasan, hingga pelanggaran hak asasi manusia.
        </p>

        <p className="text-base md:text-xl mb-4">
          Banyak Calon PMI (CPMI) berangkat tanpa informasi yang memadai, bahkan melalui jalur ilegal, sehingga rentan menjadi korban <i>human trafficking</i> atau kekerasan. Oleh karena itu, pelindungan menjadi aspek penting yang tidak dapat diabaikan.
        </p>

        <p className="text-base md:text-xl mb-6">
          Pelindungan terhadap PMI bertujuan untuk menjamin pemenuhan hak asasi manusia serta perlindungan hukum, ekonomi, dan sosial bagi PMI dan keluarganya. Ini diatur dalam <strong>Pasal 7 UU No. 18 Tahun 2017</strong>, yang mencakup:
        </p>

        <ul className="list-disc pl-6 text-base md:text-xl mb-6 space-y-1">
          <li>Pelindungan sebelum bekerja</li>
          <li>Pelindungan selama bekerja</li>
          <li>Pelindungan setelah bekerja</li>
        </ul>

        <img
        src="/K3_logo.png"
        alt="Peran Pemerintah dalam Perlindungan PMI"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
        />

        {/* Pelindungan Sebelum Bekerja */}
        <h2 className="text-xl md:text-2xl font-bold mb-2">A. Pelindungan Sebelum Bekerja</h2>
        <p className="text-base md:text-xl mb-4">
          Bertujuan untuk memastikan bahwa PMI memahami hak dan kewajiban mereka serta siap secara mental, fisik, pengetahuan, dan administratif untuk bekerja di luar negeri. Pelindungan ini mencakup dua bentuk:
        </p>

        {/* 1. Administratif */}
        <h3 className="font-semibold text-lg md:text-xl mb-2">1. Pelindungan Administratif</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Kelengkapan dan keabsahan dokumen penempatan</li>
          <li>Penetapan kondisi dan syarat kerja</li>
        </ul>

        {/* 2. Teknis */}
        <h3 className="font-semibold text-lg md:text-xl mb-2">2. Pelindungan Teknis</h3>
        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li>Pemberian sosialisasi dan diseminasi informasi</li>
          <li>Peningkatan kualitas CPMI melalui diklat</li>
          <li>Jaminan sosial</li>
          <li>Fasilitas pemenuhan hak CPMI</li>
          <li>Penguatan peran pegawai fungsional pengantar kerja</li>
          <li>Pelayanan penempatan di layanan terpadu satu atap</li>
          <li>Pembinaan dan pengawasan</li>
        </ul>
      </div>

      {/* Pelindungan Selama Bekerja */}
      <h2 className="text-xl md:text-2xl font-bold mb-2 mt-10">B. Pelindungan Selama Bekerja</h2>
      <p className="text-base md:text-xl mb-4">
        Pelindungan selama bekerja berfokus pada penegakan hak-hak PMI di negara tempat mereka bekerja. Pemerintah melakukan kerja sama bilateral dengan negara penempatan untuk menjamin pelindungan PMI selama masa kontrak kerja berlangsung.
      </p>

      <p className="text-base md:text-xl mb-2">
        Pelindungan selama bekerja mencakup:
      </p>

      <ol className="list-decimal pl-6 text-base md:text-xl space-y-1 mb-6">
        <li>Pendataan dan pendaftaran oleh atase ketenagakerjaan atau pejabat dinas luar negeri yang ditunjuk</li>
        <li>Pemantauan dan evaluasi terhadap pemberi kerja, jenis pekerjaan, dan kondisi kerja</li>
        <li>Fasilitas pemenuhan hak PMI</li>
        <li>Fasilitas penyelesaian kasus ketenagakerjaan</li>
        <li>Pemberian layanan jasa kekonsuleran</li>
        <li>Pendampingan, mediasi, advokasi, dan pemberian bantuan hukum</li>
        <li>Pembinaan terhadap PMI</li>
        <li>Fasilitas repatriasi</li>
      </ol>
    </div>
  );
};
const data = [
  {
    category: 'Implementasi K3 bagi Pekerja Migran',
    title: 'Pengertian K3',
    src: '/content_1.png',
    content: <PengertianK3 judul="Pentingnya K3 di Tempat Kerja" />,
  },
  {
    category: 'Dasar Hukum dan Asas Ketenagakerjaan bagi Pekerja Migran',
    title: 'Tinjauan Umum',
    src: '/content_2.png',
    content: <TinjauanUmum judul="Indonesia merupakan negara pengirim (sending country) buruh migran terbesar kedua di Asia Tenggara setelah Philipina." />,
  },
  {
    category: 'Literasi Perjanjian Kerja bagi Pekerja Migran',
    title: 'Literasi',
    src: '/content_3.webp',
    content: <Literasi judul="Peningkatan Literasi Perjanjian Kerja Sebagai Dasar Perlindungan Hukum Bagi Pekerja Migran" />,
  },
  {
    category: 'Peran pemerintah dalam melindungi hak Pekerja Migran',
    title: 'Peran Pemerintah',
    src: '/content_4.jpeg',
    content: <PeranPemerintah judul="Peran Pemerintah dalam Melindungi Hak Pekerja Migran Indonesia" />,
  },
];