var config = {
  port: 8000,
  public_dir: './public',
  email_address: 'craigschwartz525@gmail.com',
  smtpConfig: {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'craigschwartz525@gmail.com',
        pass: process.env.EMAIL_PASSWORD
    }
  },
  react: {
    src: './src/react/**/*',
    dest: './lib/react',
    entry_file: './lib/react/site.js',
    dist_folder: 'public/assets/js',
    minified_file: 'build.min.js'
  },
  sass: {
    src: './src/sass/**/*',
    dest: './public/style',
    output_file: 'style.css'
  }
};

module.exports = config;
