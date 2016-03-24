var config = {
  port: 8000,
  public_dir: './public',
  react: {
    src: './src/react/**/*',
    dest: './lib/react',
    entry_file: './lib/react/site.js',
    dist_folder: 'public/assets/js',
    minified_file: 'build.min.js'
  }
};

module.exports = config;
