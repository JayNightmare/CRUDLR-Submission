export const defaultImageURL = 'https://via.placeholder.com/150x150';

export const splitFullName = (fullName) => {
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    return {
        UserFirstname: firstName,
        UserLastname: lastName
    }
}