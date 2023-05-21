import { TOKEN } from "@/components/config";

export const getUsername = async (val) => {
  let url = `https://api.github.com/users/${val}/gists`;

  const header = {
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
    Authorization: TOKEN,
    "X-GitHub-Api-Version": "2022-11-28",
    // Authorization: `Bearer ${USER?.login_token}`,
  };

  let options = {
    header: header,
  };

  let resp = await fetch(url, options);
  //   console.log(resp, "kkkkkk");
  if (resp?.status != 200) {
    return [];
  } else {
    resp = await resp?.json();
    return resp;
  }
};

export const getForks = async (id) => {
  let url = `https://api.github.com/gists/${id}/forks`;

  const header = {
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
    Authorization: TOKEN,
    "X-GitHub-Api-Version": "2022-11-28",
    // Authorization: `Bearer ${USER?.login_token}`,
  };
  let options = {
    header: header,
  };

  let resp = await fetch(url, options);
  //   console.log(resp, "kkkkkk");
  if (resp?.status != 200) {
    return [];
  } else {
    resp = await resp?.json();
    return resp;
  }
};
