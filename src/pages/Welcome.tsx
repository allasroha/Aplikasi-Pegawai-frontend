import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Welcome() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle className="text-lg">Profil Pegawai</CardTitle>
            <CardDescription>Segera Lengkapi Profil Anda</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Profil anda masih kosong. Fitur ini akan dikerjakan pada Sprint 2.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-md transition-all">
          <CardHeader>
            <CardTitle className="text-lg">Sertifikat & Kompetensi</CardTitle>
            <CardDescription>Upload Sertifikat (Sprint 2)</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Fitur manajemen sertifikat belum tersedia.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
