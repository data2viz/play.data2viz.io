import platform from "platform"

export function getUserOs(): PlatformOsName {
     console.log(platform)

    if(platform.os) {
        switch (platform.os.family) {
            case "Windows":
                return "Windows"
            case "OS X":
                return "OS X"
            case "Ubuntu" || "Debian" || "Fedora" || "Red Hat":
                return "Linux"
            default :
                return "Other"
        }
    } else {
        return "Other"
    }
}

export type PlatformOsName = "Windows" | "OS X" | "Linux" | "Other"

