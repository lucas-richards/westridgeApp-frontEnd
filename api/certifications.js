import apiUrl from '../apiConfig'

// READ -> Index
// export const getAllCertifications = (dataId) => {
//     return axios(`${apiUrl}/certifications/search?dataId=${dataId}`)
// }
export const getAllCertifications = async () => {
    try {
      const response = await fetch(`${apiUrl}/training/api/certifications`);
      if (!response.ok) {
        throw new Error('Failed to fetch certifications');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch certifications');
    }
  };

export const getAllStatusCertifications = async () => {
    try {
      const response = await fetch(`${apiUrl}/training/api/statusCertifications`);
      if (!response.ok) {
        throw new Error('Failed to fetch certifications');
      }
      return await response.json();
    } catch (error) {
      throw new Error('Failed to fetch certifications');
    }
  };

// READ -> Show
// export const getOneCertification = (id) => {
//     return axios(`${apiUrl}/certifications/${id}`)
// }

// // CREATE -> Add certification
// export const createCertification = (user, newCertification) => {
//     return axios({
//         url: `${apiUrl}/certifications`,
//         method: 'POST',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         },
//         data: { certification: newCertification,user:user }
//     })
// }
// // UPDATE -> Change certification
// export const updateCertification = (user, updatedCertification) => {
//     return axios({
//         url: `${apiUrl}/certifications/${updatedCertification._id}`,
//         method: 'PATCH',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         },
//         data: { certification: updatedCertification }
//     })
// }

// // DELETE -> Set a certification free
// export const removeCertification = (user, certificationId) => {
//     return axios({
//         url: `${apiUrl}/certifications/${certificationId}`,
//         method: 'DELETE',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         }
//     })
// }