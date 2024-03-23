"use client"
import { useEffect, useState } from 'react';
import { getAllCertifications, getAllStatusCertifications } from '@/api/certifications';
import { getAllProfiles } from '@/api/profiles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Certification {
  id: number;
  name: string;
}

interface UserProfile {
  id: number;
  user: {
    username: string;
  };
  certifications: number[];
}

interface StatusCertification {
  certification: Certification;
  profile: UserProfile;
  completed_date: string;
  status: string;
}

export default function Home() {
  const [certificates, setCertificates] = useState<Certification[]>([]);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [statusCertificates, setStatusCertificates] = useState<StatusCertification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const certifications = await getAllCertifications();
        const profiles = await getAllProfiles();
        const statusCertifications = await getAllStatusCertifications();

        setCertificates(certifications);
        setProfiles(profiles);
        setStatusCertificates(statusCertifications);
      } catch (error) {
        // setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='divide-y divide-gray-100 dark:divide-gray-700'>
      <div className='space-y-2 pt-5 pb-8 md:space-x-5'>
        <h1 
          className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-13'
        >
          Training Dashboard
        </h1>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              {certificates.map(cert => (
                <TableCell key={cert.id}>{cert.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {profiles.map(profile => (
              <TableRow key={profile.id}>
                <TableCell component="th" scope="row">
                  {profile.user.username}
                </TableCell>
                {certificates.map(cert => (
                  <TableCell key={cert.id}>
                    {getCertificationStatus(profile.id, cert.id)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );

  function getCertificationStatus(profileId: number, certificationId: number): string {
    const statusCertification = statusCertificates.find(
      sc => sc.profile.id === profileId && sc.certification.id === certificationId
    );
    if (statusCertification) {
      return statusCertification.completed_date; // Assuming '+' indicates certification obtained
    } else {
      return '-'; // Assuming '-' indicates missing required certification
    }
  }
}