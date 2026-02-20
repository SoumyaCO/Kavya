'use server';

import { auth } from "@/auth";

export async function getProfileInfo() {
    const session = await auth();
    console.log(session);
    return null;
}

export async function getFollowerInfo() {
    return null;
}

export async function editProfileInfo(formData: FormData) {
    console.log("TEST: submitted");
    return null;
}