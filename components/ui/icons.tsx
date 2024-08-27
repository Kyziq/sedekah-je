interface IconProps extends React.SVGProps<SVGSVGElement> { }

export const CopyIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" x2="12" y1="15" y2="3" />
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export const TwitterColoredIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    {...props}>
    <path
      fill="#03A9F4"
      d="M42 12.429a14.978 14.978 0 0 1-4.247 1.162 7.38 7.38 0 0 0 3.251-4.058 14.829 14.829 0 0 1-4.693 1.776A7.377 7.377 0 0 0 30.926 9c-4.08 0-7.387 3.278-7.387 7.32 0 .572.067 1.129.193 1.67a21.05 21.05 0 0 1-15.224-7.654 7.23 7.23 0 0 0-1 3.686c0 2.541 1.301 4.778 3.285 6.096a7.52 7.52 0 0 1-3.349-.914v.086c0 3.551 2.547 6.508 5.923 7.181a7.346 7.346 0 0 1-1.941.263c-.477 0-.942-.054-1.392-.135.94 2.902 3.667 5.023 6.898 5.086a14.925 14.925 0 0 1-9.174 3.134 14.61 14.61 0 0 1-1.761-.104A21.109 21.109 0 0 0 17.321 38c13.585 0 21.017-11.156 21.017-20.834 0-.317-.01-.633-.025-.945A14.532 14.532 0 0 0 42 12.429"
    />
  </svg>
)

export const WhatsAppIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width="24"
    height="24"
    viewBox="0 0 308 308"
    {...props}
  >
    <path d="M227.904 176.981c-.6-.288-23.054-11.345-27.044-12.781-1.629-.585-3.374-1.156-5.23-1.156-3.032 0-5.579 1.511-7.563 4.479-2.243 3.334-9.033 11.271-11.131 13.642-.274.313-.648.687-.872.687-.201 0-3.676-1.431-4.728-1.888-24.087-10.463-42.37-35.624-44.877-39.867-.358-.61-.373-.887-.376-.887.088-.323.898-1.135 1.316-1.554 1.223-1.21 2.548-2.805 3.83-4.348a140.77 140.77 0 0 1 1.812-2.153c1.86-2.164 2.688-3.844 3.648-5.79l.503-1.011c2.344-4.657.342-8.587-.305-9.856-.531-1.062-10.012-23.944-11.02-26.348-2.424-5.801-5.627-8.502-10.078-8.502-.413 0 0 0-1.732.073-2.109.089-13.594 1.601-18.672 4.802C90 87.918 80.89 98.74 80.89 117.772c0 17.129 10.87 33.302 15.537 39.453.116.155.329.47.638.922 17.873 26.102 40.154 45.446 62.741 54.469 21.745 8.686 32.042 9.69 37.896 9.69h.001c2.46 0 4.429-.193 6.166-.364l1.102-.105c7.512-.666 24.02-9.22 27.775-19.655 2.958-8.219 3.738-17.199 1.77-20.458-1.348-2.216-3.671-3.331-6.612-4.743z" />
    <path d="M156.734 0C73.318 0 5.454 67.354 5.454 150.143c0 26.777 7.166 52.988 20.741 75.928L.212 302.716a3.998 3.998 0 0 0 4.999 5.096l79.92-25.396c21.87 11.685 46.588 17.853 71.604 17.853C240.143 300.27 308 232.923 308 150.143 308 67.354 240.143 0 156.734 0zm0 268.994c-23.539 0-46.338-6.797-65.936-19.657a3.996 3.996 0 0 0-3.406-.467l-40.035 12.726 12.924-38.129a4.002 4.002 0 0 0-.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 0-65.543 53.754-118.867 119.826-118.867 66.064 0 119.812 53.324 119.812 118.867.001 65.535-53.746 118.851-119.811 118.851z" />
  </svg>
)

export const WhatsAppColoredIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
    {...props}>
    <path
      d="m4.868 43.303 2.694-9.835a18.941 18.941 0 0 1-2.535-9.489C5.032 13.514 13.548 5 24.014 5a18.867 18.867 0 0 1 13.43 5.566A18.866 18.866 0 0 1 43 23.994c-.004 10.465-8.522 18.98-18.986 18.98-.001 0 0 0 0 0h-.008a18.965 18.965 0 0 1-9.073-2.311l-10.065 2.64z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M4.868 43.803a.499.499 0 0 1-.482-.631l2.639-9.636a19.48 19.48 0 0 1-2.497-9.556C4.532 13.238 13.273 4.5 24.014 4.5a19.367 19.367 0 0 1 13.784 5.713A19.362 19.362 0 0 1 43.5 23.994c-.004 10.741-8.746 19.48-19.486 19.48a19.535 19.535 0 0 1-9.144-2.277l-9.875 2.589a.457.457 0 0 1-.127.017z"
      style={{
        fill: "#fff",
      }}
    />
    <path
      d="M24.014 5a18.867 18.867 0 0 1 13.43 5.566A18.866 18.866 0 0 1 43 23.994c-.004 10.465-8.522 18.98-18.986 18.98h-.008a18.965 18.965 0 0 1-9.073-2.311l-10.065 2.64 2.694-9.835a18.941 18.941 0 0 1-2.535-9.489C5.032 13.514 13.548 5 24.014 5m0-1C12.998 4 4.032 12.962 4.027 23.979a20.01 20.01 0 0 0 2.461 9.622L3.903 43.04a.998.998 0 0 0 1.219 1.231l9.687-2.54a20.026 20.026 0 0 0 9.197 2.244c11.024 0 19.99-8.963 19.995-19.98A19.856 19.856 0 0 0 38.153 9.86 19.869 19.869 0 0 0 24.014 4z"
      style={{
        fill: "#cfd8dc",
      }}
    />
    <path
      d="M35.176 12.832a15.673 15.673 0 0 0-11.157-4.626c-8.704 0-15.783 7.076-15.787 15.774a15.738 15.738 0 0 0 2.413 8.396l.376.597-1.595 5.821 5.973-1.566.577.342a15.75 15.75 0 0 0 8.032 2.199h.006c8.698 0 15.777-7.077 15.78-15.776a15.68 15.68 0 0 0-4.618-11.161z"
      style={{
        fill: "#40c351",
      }}
    />
    <path
      d="M19.268 16.045c-.355-.79-.729-.806-1.068-.82-.277-.012-.593-.011-.909-.011-.316 0-.83.119-1.265.594-.435.475-1.661 1.622-1.661 3.956 0 2.334 1.7 4.59 1.937 4.906.237.316 3.282 5.259 8.104 7.161 4.007 1.58 4.823 1.266 5.693 1.187.87-.079 2.807-1.147 3.202-2.255.395-1.108.395-2.057.277-2.255-.119-.198-.435-.316-.909-.554s-2.807-1.385-3.242-1.543c-.435-.158-.751-.237-1.068.238-.316.474-1.225 1.543-1.502 1.859-.277.317-.554.357-1.028.119s-2.002-.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285-.277-.474-.03-.731.208-.968.213-.213.474-.554.712-.831.237-.277.316-.475.474-.791.158-.317.079-.594-.04-.831-.117-.238-1.039-2.584-1.461-3.522z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        fill: "#fff",
      }}
    />
  </svg>
)
