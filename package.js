Package.describe({
  name: 'universe:react-clock-picker',
  version: '0.5.0',
  // Brief, one-line summary of the package.
  summary: 'React TimePicker for Meteor JS',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:vazco/universe-react-clock-picker.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('react-runtime@0.13.3_7');
  api.use('jsx@0.2.1');
  api.use('universe:modules@0.6.1', {weak:true});
  api.addFiles('react-clock-picker.jsx');
  api.addFiles('clock-picker.css', 'client');
  api.export('_TimePicker');
});
